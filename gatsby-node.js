/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const Sheets = require("node-sheets").default;
const createNodeHelpers = require("gatsby-node-helpers");
const NodeGoogleDrive = require('node-google-drive');
const camelCase = require("camelcase");
const credentials = require('./philomena-site-93dddf35c845.json')
const { createRemoteFileNode, createFileNodeFromBuffer } = require('gatsby-source-filesystem');
const fs = require('fs');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, store, getCache }) => {
    const {createNode} = actions;
    const typePrefix = "GoogleSpreadsheet";
    const filterNode = () => true;
    const mapNode = node => node;
    const spreadsheetId = '1wyRPydG-zHdvJLPYAbQnp6oIAZ6WlZbetDz_ApbkcQI';
    const spreadsheetName = 'Inventory';


    const IMAGE_FOLDER = '1w3-CRBAssjTOCj2qRK1YlURaxJQiASnW';
    const googleDriveInstance = new NodeGoogleDrive({ROOT_FOLDER: IMAGE_FOLDER});
    let gdrive = await googleDriveInstance.useServiceAccountAuth(credentials);
    // List Folders under the root folder
    let folderResponse = await googleDriveInstance.listFiles(IMAGE_FOLDER, null, false) ; // (IMAGE_FOLDER);
    // console.log(folderResponse.files);
    // console.log(file)
    const gs = new Sheets(spreadsheetId);

    if (credentials) {
        await gs.authorizeJWT(credentials);
    }

    const promises = (await gs.getSheetsNames()).map(async sheetTitle => {
        const tables = await gs.tables(sheetTitle);
        const {rows} = tables;
        await Promise.all(
        rows
            .map(toNode)
            .filter(filterNode)
            .map(mapNode)
            .map(async (node, i) => {
                const hasProperties = Object.values(node).some(value => value !== null);
                if (hasProperties) {
                    if(node.picture) {
                        console.log(`Finding picture ${node.picture}`)
                        // let file = await googleDriveInstance.getFile(folderResponse.files.find(f => f.name === node.picture));
                        let fileInfo = folderResponse.files.find(f => f.name === node.picture);
                        if (fileInfo) {
                            let file = await googleDriveInstance.getFile(fileInfo);
                            // const dest = 'src/images/drive/' + node.picture;
                            // console.log('Copy', file, dest);
                            // fs.copyFileSync(file, dest);
                            // node.picture = dest;
                            node.picture = file;
                        }
                    }
                    createNode({
                        ...node,
                        id: createNodeId(`${typePrefix} ${spreadsheetName} ${sheetTitle} ${i}`),
                        internal: {
                            type: `${typePrefix}${spreadsheetName}${sheetTitle}`,
                            contentDigest: createContentDigest(node)
                        }
                    });
                }
            }));
    });
    return Promise.all(promises);
};


exports.onCreateNode = async ({node, actions, store, getCache, createNodeId}) => {

    if (node.internal.type === 'GoogleSpreadsheetInventoryInventory') {
        const { createNode } = actions;
        if(!node.picture) return;
        const buffer = fs.readFileSync(node.picture);
        const fileNode = await createFileNodeFromBuffer({
            buffer, // string that points to the URL of the image
            parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
            store, // Gatsby's redux store
            getCache, // get Gatsby's cache
            createNode, // helper function in gatsby-node to generate the node
            createNodeId, // helper function in gatsby-node to generate the node id
        });
        if (fileNode) {
            node.image___NODE = fileNode.id;
        }
    }
};

function toNode(row) {
    return Object.entries(row).reduce((obj, [key, cell]) => {
        if (key === undefined || key === "undefined") {
            return obj;
        }

        // `node-sheets` adds default values for missing numbers and dates, by checking
        // for the precense of `stringValue` (the formatted value), we can ensure that
        // the value actually exists.
        const value =
            typeof cell === "object" && cell.stringValue !== undefined
                ? cell.value
                : null;
        obj[camelCase(key)] = value;

        return obj;
    }, {});
}

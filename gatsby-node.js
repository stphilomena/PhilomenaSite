/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const Sheets = require("node-sheets").default;
const createNodeHelpers = require("gatsby-node-helpers");
const camelCase = require("camelcase");
const credentials = require('./philomena-site-93dddf35c845.json')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, store, getCache }) => {
    const {createNode} = actions;
    const typePrefix = "GoogleSpreadsheet";
    const filterNode = () => true;
    const mapNode = node => node;
    const spreadsheetId = '1wyRPydG-zHdvJLPYAbQnp6oIAZ6WlZbetDz_ApbkcQI';
    const spreadsheetName = 'Inventory';

    const gs = new Sheets(spreadsheetId);

    if (credentials) {
        await gs.authorizeJWT(credentials);
    }

    const promises = (await gs.getSheetsNames()).map(async sheetTitle => {
        const tables = await gs.tables(sheetTitle);
        const {rows} = tables;
        rows
            .map(toNode)
            .filter(filterNode)
            .map(mapNode)
            .forEach((node, i) => {
                const hasProperties = Object.values(node).some(value => value !== null);
                if (hasProperties) {
                    createNode({...node,
                        id: createNodeId(`${typePrefix} ${spreadsheetName} ${sheetTitle} ${i}`),
                        internal: {type: `${typePrefix}${spreadsheetName}${sheetTitle}`,
                            contentDigest: createContentDigest(node)}});
                }
            });
    });
    return Promise.all(promises);
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

const paypal = require('@paypal/checkout-server-sdk');
const Validator = require('Validator');
const Sheets = require("node-sheets").default;
const NodeGoogleDrive = require('node-google-drive');
const camelCase = require("camelcase");
const payPalClient = require('../common/paypalClient');
const {BackendError} = require("../common/errors")
const {computeShipping, computeTotal, computeTax} = require("../common/checkout");
const credentials = require('../../philomena-site-93dddf35c845.json')
const { URLSearchParams } = require('url');
const fetch = require('node-fetch');
const google = require('googleapis');
const spreadsheetId = '1wyRPydG-zHdvJLPYAbQnp6oIAZ6WlZbetDz_ApbkcQI';

const toNode = (row, index)=> {
    let node = Object.entries(row).reduce((obj, [key, cell]) => {
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
    node['qtyCell'] = `F${index+2}:F${index+2}`;
    return node;
}

const getProductsInfo = async (itemIds) => {
    const sheets = new Sheets(spreadsheetId);
    const spreadsheetName = 'Inventory';
    if (credentials) {
        await sheets.authorizeJWT(credentials);
    }

    const sheetTitles = await sheets.getSheetsNames();
    const productInfo = {};
    for(const key in sheetTitles) {
        let sheetTitle = sheetTitles[key];
        console.log('Getting ', sheetTitle)
        if(sheetTitle !== spreadsheetName) continue;
        const tables = await sheets.tables(sheetTitle);
        const {rows} = tables;
        let nodes = rows.map(toNode).filter(node => itemIds.some(i => i === node.itemId));
        nodes.forEach(node => productInfo[node.itemId] = node);
    }
    return productInfo;
}

const updateProductsQty = async (cart) => {
    try {
        let jwtClient = new google.Auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

        await jwtClient.authorize()
        let sheetName = 'Inventory!'
        let sheets = new google.sheets_v4.Sheets();
        for(let i = 0; i < cart.length; ++i) {
            if(cart.shopItem) {
                await sheets.spreadsheets.values.update({
                    auth: jwtClient,
                    spreadsheetId: spreadsheetId,
                    valueInputOption: "USER_ENTERED",
                    range: sheetName + cart[i].shopItem.qtyCell,
                    resource: {
                        values: [[parseInt(cart[i].shopItem.option1Quantity) - parseInt(cart[i].qty)]]
                    }
                });
            }
        }
    } catch {
    }
}

export default async function handler(req, res) {
    const checkout = {...req.query, ...req.body};

    if(checkout.resource.status === "COMPLETED") {
        try {
            let jwtClient = new google.Auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

            await jwtClient.authorize()
            let sheetName = 'Webhooks!A1:A1'
            let sheets = new google.sheets_v4.Sheets();
            await sheets.spreadsheets.values.append({
                auth: jwtClient,
                spreadsheetId: spreadsheetId,
                valueInputOption: "USER_ENTERED",
                range: sheetName,
                resource: {
                    values: [[JSON.stringify(checkout)]]
                }
            });
        } catch {
        }

        const items = [];
        checkout.resource.purchase_units.forEach(unit => {
            if(unit.items) {
                unit.items.forEach(item => {
                    items.push({
                        sku: item.sku,
                        price: item.unit_amount.value,
                        qty: item.quantity
                    })
                })
            }
        })

        const shopInfo = await getProductsInfo(items.map(item => item.sku));

        await updateProductsQty(items.map(item => {return {...item, shopInfo: shopInfo[item.sku]}}));
    }


    res.status(200).json({ status: "OK"});
}

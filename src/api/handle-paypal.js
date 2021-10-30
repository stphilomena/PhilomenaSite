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

const updateProductsQty = async (cart) => {
    try {
        let jwtClient = new google.Auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

        await jwtClient.authorize()
        let sheetName = 'Inventory!'
        let sheets = new google.sheets_v4.Sheets();
        for(let i = 0; i < cart.length; ++i) {
            await sheets.spreadsheets.values.update({
                auth: jwtClient,
                spreadsheetId: spreadsheetId,
                valueInputOption: "USER_ENTERED",
                range: sheetName+cart[i].shopItem.qtyCell,
                resource: {
                    values: [[parseInt(cart[i].shopItem.option1Quantity) - parseInt(cart[i].qty)]]
                }
            });
        }
    } catch {
    }
}

export default async function handler(req, res) {
    const checkout = {...req.query, ...req.body};
    try {
        let jwtClient = new google.Auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

        await jwtClient.authorize()
        let sheetName = 'T!A1:A1'
        let sheets = new google.sheets_v4.Sheets();
            await sheets.spreadsheets.values.update({
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
}

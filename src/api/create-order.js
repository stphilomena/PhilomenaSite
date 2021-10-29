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

const validateOrder = (checkout) => {
    const rules = {
        "firstName": 'required',
        "lastName": 'required',
        "email": 'required|email',
        "phone": 'required',
        "address1": 'required',
        // "shipping.address2": 'required',
        "city": 'required',
        "state": 'required',
        "zip": 'required',

        // 'cart': 'required|array|min:1',
        // 'cart.*.itemId': 'required',
        // 'cart.*.qty': 'required',
    }
    const v1 = Validator.make(checkout.shipping, rules);
    const v2 = Validator.make(checkout.billing, rules);
    v1.passes();
    v2.passes();

    if (!v1.passes() || !v2.passes()) {
        throw new BackendError('Billing or shipping address is incorrect.', 400, {errors: {shipping: v1.getErrors(), billing: v2.getErrors()}});
        // throw new BackendError('Validation failed', 400, {errors: validation.errors.all()});
    }
}

const toNode = (row)=> {
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

const getProductsInfo = async (itemIds) => {
    const spreadsheetId = '1wyRPydG-zHdvJLPYAbQnp6oIAZ6WlZbetDz_ApbkcQI';
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

const validateProducts = async (checkout) => {
    const items = await getProductsInfo(checkout.cart.map(p => p.itemId));
    const errors = [];
    let cartTotal = 0;
    checkout.cart.forEach((cartItem, index) => {
        const qty = parseInt(cartItem.qty);
        if(isNaN(qty) || qty <= 0) {
            errors.push(`The ${cartItem.itemId} quantity is invalid '${cartItem.qty}'.`)
            return;
        }
        if(!items.hasOwnProperty(cartItem.itemId)) {
            errors.push(`The ${cartItem.itemId} item is invalid. Check the SKU number.`)
            return;
        }
        const shopItem = items[cartItem.itemId];
        if(parseInt(shopItem.option1Quantity) <= 0) {
            errors.push(`The ${cartItem.itemId} item is unavailable.`)
            return;
        }
        if(parseInt(shopItem.option1Quantity) < cartItem.qty) {
            errors.push(`The requested quantity of ${cartItem.itemId} item is unavailable.`)
            return;
        }
        if(!shopItem.option1Price || isNaN(parseFloat(shopItem.option1Price))) {
            errors.push(`The ${cartItem.itemId} item is unavailable. Item is available on special order only.`)
            return;
        }
        checkout.cart[index].price = parseFloat(shopItem.option1Price);
        checkout.cart[index].id = shopItem.itemId;
        cartTotal += parseFloat(shopItem.option1Price) * qty;
        console.log('Calc total', cartTotal, parseFloat(shopItem.option1Price), qty);
    })
    if (errors.length > 0) {
        throw new BackendError('Some items from the cart have errors', 400, {errors: {cart: errors}});
    }
    return {cartTotal, items};
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const checkout = {...req.query, ...req.body};
    try {
        validateOrder(checkout);
        const {cartTotal, items} = await validateProducts(checkout);
        let shipping = computeShipping(cartTotal);
        // TODO: determine tax rate and shipping rate
        let tax = computeTax(cartTotal, shipping, 0.07, false);

        let total = parseFloat(cartTotal) + parseFloat(shipping) + parseFloat(tax);
        if(isNaN(total) || total < cartTotal || total < 0) {
            throw new BackendError("Internal error - incorrect total price")
        }

        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody(
            {
                intent: 'CAPTURE',
                payer: {
                    "email_address": checkout.billing.email,
                    name: {
                        "given_name": checkout.billing.firstName,
                        "surname": checkout.billing.lastName
                    },
                    address: {
                        address_line_1: checkout.billing.address1,
                        address_line_2: checkout.billing.address2,
                        admin_area_2: checkout.billing.city,
                        admin_area_1: checkout.billing.state,
                        postal_code: checkout.billing.zip,
                        country_code: 'US'
                    }
                },
                purchase_units: [{
                    amount: {
                        value: total.toString(),
                        currency_code: 'USD',
                        breakdown: {
                            item_total: {value: cartTotal.toString(), currency_code: 'USD'},
                            tax_total: {value: tax, currency_code: 'USD'},
                            shipping: {value: shipping, currency_code: 'USD'}
                        },
                    },
                    items: checkout.cart.map(item => {
                        return {
                            name: items[item.itemId].title + ' ' + items[item.itemId].option1Name,
                            sku: item.itemId,
                            unit_amount: {"currency_code": "USD", value: item.price},
                            quantity: item.qty
                        }
                    }),
                    shipping: {
                        method: "Shipping",
                        name: {
                            full_name: checkout.shipping.firstName + ' ' + checkout.shipping.lastName
                        },
                        address: {
                            address_line_1: checkout.shipping.address1,
                            address_line_2: checkout.shipping.address2,
                            admin_area_2: checkout.shipping.city,
                            admin_area_1: checkout.shipping.state,
                            postal_code: checkout.shipping.zip,
                            country_code: 'US'
                        }
                    }
                }]
            }
            );

        let order;
        try {
          order = await payPalClient.client().execute(request);
        } catch (err) {
          // 4. Handle any errors from the call
          console.error(err);
          return res.send(500);
        }

        // Save to klaviyo
        try {
            const encodedParams = new URLSearchParams();
            const eventInfo = {
                token: process.env.KLAVIYO_PUBLIC_KEY,
                event: "Ordered Products",
                customer_properties: {
                    "$email": checkout.billing.email,
                    "$first_name": checkout.billing.firstName,
                    "$last_name": checkout.billing.lastName,
                    "$city": checkout.billing.city,
                    "$region": checkout.billing.state,
                    "$country": "US",
                    "$zip": checkout.billing.zip
                },
                properties: {
                    "$value": total.toString(),
                    amount: {
                        value: total.toString(),
                        currency_code: 'USD',
                        breakdown: {
                            item_total: {value: cartTotal.toString(), currency_code: 'USD'},
                            tax_total: {value: tax, currency_code: 'USD'},
                            shipping: {value: shipping, currency_code: 'USD'}
                        },
                    },
                    items: checkout.cart.map(item => {
                        return {
                            name: items[item.itemId].title + ' ' + items[item.itemId].option1Name,
                            sku: item.itemId,
                            unit_amount: {"currency_code": "USD", value: item.price},
                            quantity: item.qty
                        }
                    }),
                    shipping: {
                        method: "Shipping",
                        name: {full_name: checkout.shipping.firstName + ' ' + checkout.shipping.lastName},
                        address: {
                            address_line_1: checkout.shipping.address1,
                            address_line_2: checkout.shipping.address2,
                            admin_area_2: checkout.shipping.city,
                            admin_area_1: checkout.shipping.state,
                            postal_code: checkout.shipping.zip,
                            country_code: 'US'
                        }
                    }
                }
            }
            encodedParams.set('data', JSON.stringify(eventInfo));
            const url = 'https://a.klaviyo.com/api/track';
            const options = {
                method: 'POST',
                headers: {Accept: 'text/html', 'Content-Type': 'application/x-www-form-urlencoded'},
                body: encodedParams
            };
            await fetch(url, options);
        } catch {

        }
        // res.status(200).json({cartTotal, items, checkout, order});
        res.status(200).json({orderID: order.result.id, links: order.result.links});
    } catch(e) {
        if(e instanceof BackendError) {
            res.status(e.code||500).json({...e.details, message: e.message, checkout});
        } else {
            res.status(500).json({message: e.message});
        }
    }
  //
  //
  // // 5. Return a successful response to the client with the order ID
  // res.status(200).json({

  //   orderID: order.result.id
  // });
}
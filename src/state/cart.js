import { createSlice } from '@reduxjs/toolkit'
import {computeShipping, computeTotal, computeTax} from "../common/checkout";

const initCart = {
    products: [],
    shipping: 0,
    tax: 0,
    total: 0,
    tax_rate: 0.07,
    tax_shipping: false,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: initCart,
    reducers: {
        updateTax: (state, action) => {
            const {tax, tax_rate, tax_shipping} = action.payload;
            state.tax = tax;
            state.tax_rate = tax_rate;
            state.tax_shipping = tax_shipping;
        },
        addProduct: (state, action) => {
            const {itemId, price, title, image, url, qty, availQty} = action.payload
            const index = state.products.findIndex((product) => product.itemId === itemId)
            if(index === -1) {
                state.products.push({
                    itemId: itemId,
                    price: price,
                    title: title,
                    image: image,
                    url: url,
                    qty: Math.min(availQty || qty || 1, qty || 1)})
            } else {
                const product = state.products[index]
                state.products[index].qty = availQty ? Math.min(availQty, product.qty + (qty||1)) : product.qty + (qty||1)
            }
            state.total = computeTotal(state)
            state.shipping = computeShipping(state.total)
            state.tax = computeTax(state.total, state.shipping, state.tax_rate, state.tax_shipping)
        },
        removeProduct: (state, action) => {
            const {itemId, qty} = action.payload
            const index = state.products.findIndex((product) => product.itemId === itemId)
            if(index === -1) {
                return
            }
            const product = state.products[index]
            if(qty && qty < product.qty) {
                state.products[index].qty -= qty
            } else {
                state.products.splice(index, 1)
            }
            state.total = computeTotal(state)
            state.shipping = computeShipping(state.total)
            state.tax = computeTax(state.total, state.tax, state.tax_rate, state.tax_shipping)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, updateTax } = cartSlice.actions

export default cartSlice.reducer

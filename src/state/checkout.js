import { createSlice } from '@reduxjs/toolkit'

const initCheckout = {
    shipping_method: null,
    shipping_name: null,
    shipping_last_name: null,
    shipping_address: null,
    shipping_address2: null,
    shipping_country: null,
    shipping_state: null,
    shipping_city: null,
    shipping_zip: null,
    phone: null,
    email: null,
    billing_name: null,
    billing_last_name: null,
    billing_address: null,
    billing_address2: null,
    billing_country: null,
    billing_state: null,
    billing_city: null,
    billing_zip: null,
    billing_phone: null,
    payment_method: null
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: initCheckout,
    reducers: {
        updateCheckoutField: (state, action) => {
            const {name, value} = action.payload
            state[name] = value
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateCheckoutField } = checkoutSlice.actions

export default checkoutSlice.reducer

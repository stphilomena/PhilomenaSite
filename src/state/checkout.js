import { createSlice } from '@reduxjs/toolkit'

const initCheckout = {
    billing: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    },
    shipping: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    }
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: initCheckout,
    reducers: {
        updateBillingField: (state, action) => {
            const {name, value} = action.payload
            state.billing[name] = value
        },
        updateShippingField: (state, action) => {
            const {name, value} = action.payload
            state.shipping[name] = value
        },
        updateShippingInfo: (state, action) => {
            const {info} = action.payload
            state.shipping = {...state.shipping, ...info};
        },
        updateBillingInfo: (state, action) => {
            const {info} = action.payload
            state.billing = {...state.billing, ...info};
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateBillingField, updateShippingField, updateBillingInfo, updateShippingInfo } = checkoutSlice.actions

export default checkoutSlice.reducer

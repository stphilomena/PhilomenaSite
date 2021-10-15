import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'
import checkoutSlice from './checkout'
import {loadState} from "./localStorage";

const createStore = () => configureStore({
    preloadedState: loadState(),
    reducer: {
        cart: cartSlice,
        checkout: checkoutSlice,
    },
})


export default createStore

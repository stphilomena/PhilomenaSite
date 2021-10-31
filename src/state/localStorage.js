import {initCart} from "./cart";
import {initCheckout} from "./checkout";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        const deserialized = JSON.parse(serializedState)
        const deserializedCart = deserialized.cart || {};
        const deserializedCheckout = deserialized.checkout || {};

        const state = {
            cart: {initCart, ...deserializedCart},
            checkout: {initCheckout, ...deserializedCheckout}
        };
        console.log('loaded state', state)
        return state;
    } catch(err) {
        return undefined;
    }
}
export const saveState = (state) => {
    try {
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState);
    } catch (err) {
        // Ignore errors
    }
}

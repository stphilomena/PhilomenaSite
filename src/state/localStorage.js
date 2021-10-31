import {initCart} from "./cart";
import {initCheckout} from "./checkout";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        const deserialized = JSON.parse(serializedState)

        return {
            cart: initCart,
            checkout: initCheckout,
            ...deserialized
        };
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

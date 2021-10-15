import React from "react"
import { Provider } from "react-redux"
import throttle from 'lodash.throttle';
import createStore from "./src/state/index"
import {saveState} from "./src/state/localStorage";

const ReduxProvider = ({ element }) => {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts
    const store = createStore();
    store.subscribe(throttle(() => {
        saveState(store.getState())
    }, 1000))
    return <Provider store={store}>{element}</Provider>
}

export default ReduxProvider

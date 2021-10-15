/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css';

import wrapWithProvider from "./redux-provider"

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
    // console.log("new pathname", location.pathname)
    // console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
export const wrapRootElement = wrapWithProvider

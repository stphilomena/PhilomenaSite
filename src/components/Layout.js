/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import "/layout.css"
// import SideCart from "./SideCart";

const Layout = ({ children, noCart }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  //

  return (
    <>
      <script
        async
        type="text/javascript"
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=WuiJJG"
      />
      <script src="https://www.paypal.com/sdk/js?client-id=ASQwqDlBG6cxCWAynbTjbRevQVD7Ihunm4ivgbOF6TUgGIgjtgrVrAiF7CayL3tdnnw6_F8FcRGwlQgL" />

      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-menu" viewBox="0 0 32 32">
            <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z" />
          </symbol>
        </defs>
      </svg>

      <main className={"w-screen overflow-hidden"}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noCart: PropTypes.bool,
}

export default Layout

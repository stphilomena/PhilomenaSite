/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer";
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
      <main className={'w-screen overflow-hidden'}>{children}</main>
        <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
   noCart: PropTypes.bool
}

export default Layout

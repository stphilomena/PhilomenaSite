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
import SideCart from "./SideCart";

const Layout = ({ children, noCart }) => {
  const PAYPAL_SCRIPT = 'https://www.paypal.com/sdk/js?client-id=AVMHbhoq5ugxAWgjRLW7ZhDJEL9jOAGIw5TlvRXBCgHEBUhC2xD96nL6nQd-o4wajuw9AP-lSyXZLbbk';
  const script = document.createElement('script');
  script.setAttribute('src', PAYPAL_SCRIPT);
  document.head.appendChild(script);
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
        {noCart?"": <SideCart/>}
        <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
   noCart: PropTypes.bool
}

export default Layout

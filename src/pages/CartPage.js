import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import CartPageContent from "../components/CartPageContent"
import SuccessfulCart from "../components/CartPageContentSuccessful"
import EmptyCart from "../components/CartPageContentEmpty"



const CartPage = () => (
  <Layout noCart={true}>
    <Seo title="The National Shrine of Saint Philomena" />
    <HomeHeader/>      
<script src="https://www.paypal.com/sdk/js?client-id=AVMHbhoq5ugxAWgjRLW7ZhDJEL9jOAGIw5TlvRXBCgHEBUhC2xD96nL6nQd-o4wajuw9AP-lSyXZLbbk" />
    <Menu/>
    <CartPageContent/>
 
  </Layout>
)

export default CartPage

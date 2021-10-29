import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import CartPageContentSuccessful from "../components/CartPageContentSuccessful";

const CartPage = () => (
    <Layout noCart={true}>
        <Seo title="The National Shrine of Saint Philomena" />
        <HomeHeader/>
        <Menu/>
        <CartPageContentSuccessful/>

    </Layout>
)

export default CartPage

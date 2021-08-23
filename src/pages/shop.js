import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import Card from "../components/Card"


const Shop = () => (
    <Layout>

        <Seo title="Schedule the Visit | National Shrine of Saint Philomena" />
        <HomeHeader/>
        <Menu/>
        <div className="centerAll py-10">
            <div className="grid grid-cols-4 w-5/6 gap-5">
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
                <div className="centerAll pt-20"><Card/></div>
            </div>
        </div>
    </Layout>
)

export default Shop

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import SideCart from "../components/SideCart"
import HomeHeader from "../components/HomeHeader"
import Card from "../components/Card"


const Shop = () => {
      const { inventory } = useStaticQuery(
      graphql`
          query InventoryQuery {
              inventory: allGoogleSpreadsheetInventoryInventory(sort: {fields: id, order: DESC}) {
                  nodes {
                      category
                      description
                      id
                      itemId
                      title
                      slug
                      picture
                      option2Quantity
                      option2Price
                      option2Name
                      option1Quantity
                      option1Price
                      option1Name
                      image {
                          childImageSharp {
                              gatsbyImageData(placeholder: BLURRED)
                          }
                      }
                  }
              }
          }
      `
    )

    const items = inventory.nodes;
    console.log(items);

    return (
        <Layout>
            <Seo title="Schedule the Visit | National Shrine of Saint Philomena"/>
            <HomeHeader/>
            <Menu/>
            <div className="centerAll py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-5 p-5">
                    {items.map(item => {
                        return (
                            <div key={item.itemId} className="centerAll pt-20"><Card item={item}/></div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default Shop

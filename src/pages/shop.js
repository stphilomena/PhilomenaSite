import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import SideCart from "../components/SideCart"
import HomeHeader from "../components/HomeHeader"
import Card from "../components/Card"

const Shop = ({ data }) => {
  const { category, image } = data.allContentfulShopProducts.nodes
  return (
    <Layout>
      <Seo title="Shop Devotional Items | National Shrine of Saint Philomena" />
      <HomeHeader />
      <Menu />
      <div className="centerAll py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-5 p-5">
          {data.map((image) => {
            return (
              <div key={item.itemId} className="centerAll pt-20">
                <Card item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default Shop

// graphql query for the product details
export const query = graphql`
  query AllProductsQuery {
    allContentfulShopProducts {
      nodes {
        image
        contentfulid
        option1name
        option1price
        option1qty
        taxCharge
        title
        slug
        shippingCharge
        description {
          description
        }
        createdAt
        category
      }
    }
  }
`

import * as React from "react"

import NewMenu from "../components/NewMenu"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HomeHeader from "../components/HomeHeader"

const currentDev = ({ data }) => {
  const { category, image } = data.allContentfulShopProducts.nodes
  return (
    <Layout>
      <HomeHeader />
      <NewMenu />
      <section className="py-20 text-3xl">
        <p> {category} </p>
      </section>
    </Layout>
  )
}
export default currentDev

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

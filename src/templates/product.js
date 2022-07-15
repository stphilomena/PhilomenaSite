import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import ProductDetailHeader from "../components/ProductDetailHeader"
import ProductDetailContent from "../components/ProductDetailContent"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const productDetail = ({ data, pageContext, uri }) => {
  console.log("Data", pageContext)
  const { product } = data

  console.log(product)

  return (
    <Layout>
      <Seo title="Saint Philomena Devotional Items | National Shrine of Saint Philomena" />
      <ProductDetailHeader />
      <Menu />
      <ProductDetailContent product={product} />
    </Layout>
  )
}

export const query = graphql`
  query($id: Date) {
    product: googleSpreadsheetInventoryInventory(itemId: { eq: $id }) {
      option1Name
      option1Price
      option1Quantity
      option2Name
      option2Price
      option2Quantity
      title
      description
      noShipping
    }
  }
`

export default productDetail

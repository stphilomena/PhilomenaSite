import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import ProductDetailHeader from "../components/ProductDetailHeader"
import ProductDetail from "../components/ProductDetails"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const productDetail = ({}) => {
  return (
    <Layout>
      <Seo title="Saint Philomena Devotional Items | National Shrine of Saint Philomena" />
      <ProductDetailHeader />
      <Menu />
      <ProductDetail product={product} />
    </Layout>
  )
}

export default productDetail

import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import ProductDetailHeader from "../components/ProductDetailHeader"
import ProductDetailContent from "../components/ProductDetailContent"
import Layout from "../components/Layout"


const productDetail = () => (
  <Layout>
    
    <Seo title="Saint Philomena Devotional Items | National Shrine of Saint Philomena" />
    <ProductDetailHeader/>
    <Menu/>
    <ProductDetailContent/>
 
  </Layout>
)

export default productDetail

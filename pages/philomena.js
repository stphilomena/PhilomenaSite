import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import PhilomenaHeader from "../components/PhilomenaHeader"
import PhilomenaContent from "../components/PhilomenaContent"
import Footer from "../components/Footer"
import Layout from "../components/Layout"


const Philomena = () => (
  <Layout>
    
    <Seo title="About Saint Philomena | National Shrine of Saint Philomena" />
    <PhilomenaHeader/>
    <Menu/>
    <PhilomenaContent/>
 
  </Layout>
)

export default Philomena

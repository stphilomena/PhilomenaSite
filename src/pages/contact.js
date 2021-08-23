import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import ContactHeader from "../components/ContactHeader"
import ContactContent from "../components/ContactContent"


const Contact = () => (
  <Layout>
    
    <Seo title="The National Shrine of Saint Philomena" />
    <ContactHeader/>
    <Menu/>
    <ContactContent/>
 
  </Layout>
)

export default Contact

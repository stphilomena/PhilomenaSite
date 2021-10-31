import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import FormsHeader from "../components/FormsHeader"
import FormsContent from "../components/FormsContent"


const About = () => (
  <Layout>
    
    <Seo title="About The Shrine | National Shrine of Saint Philomena" />
    <FormsHeader/>
    <Menu/>
    <FormsContent/>
    
 <div className="pb-10 lg:pb-20">

 </div>
  </Layout>
)

export default About

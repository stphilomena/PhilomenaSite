import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import AboutHeader from "../components/AboutHeader"
import AboutContent from "../components/AboutContent"
import AboutAccordion from "../components/AboutAccordion"


const About = () => (
  <Layout>
    
    <Seo title="About The Shrine | National Shrine of Saint Philomena" />
    <AboutHeader/>
    <Menu/>
    <AboutContent/>
    <AboutAccordion/>
 
  </Layout>
)

export default About

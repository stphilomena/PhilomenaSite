import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import HomeContent from "../components/HomeContent"


const Home = () => (
  <Layout>
    
    <Seo title="The National Shrine of Saint Philomena" />
    <HomeHeader/>
    Hi greg! This is a Test!
    <Menu/>
    <HomeContent/>
 
  </Layout>
)

export default Home

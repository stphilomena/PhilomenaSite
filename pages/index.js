import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import HomeContent from "../components/HomeContent"


const Home = () => (
  <Layout>
    
    <Seo title="The National Shrine of Saint Philomena" />
    <HomeHeader/>
    <Menu/>
    <HomeContent/>
 
  </Layout>
)

export default Home

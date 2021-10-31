import * as React from "react"

import NewMenu from "../components/NewMenu"
import Layout from "../components/Layout"
import {StaticQuery, graphql} from "gatsby";
import HomeHeader from "../components/HomeHeader";



const currentDev = () => (
  <Layout>
    <NewMenu/>
    <HomeHeader/>
  </Layout>
)

export default currentDev

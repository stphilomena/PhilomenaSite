import * as React from "react"

import NewMenu from "../components/NewMenu"
import Layout from "../components/Layout"
import {StaticQuery, graphql} from "gatsby";



const currentDev = () => (
  <Layout>
    <NewMenu/>
  </Layout>
)

export default currentDev

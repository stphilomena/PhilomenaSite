import * as React from "react"

import NewMenu from "../components/NewMenu"
import Layout from "../components/Layout"
import {StaticQuery, graphql} from "gatsby";
import HomeHeader from "../components/HomeHeader";
import ProfileForm from "../components/ProfileForm";



const currentDev = () => (
  <Layout>
    <HomeHeader/>
    <NewMenu/>
    <ProfileForm/>
  </Layout>
)

export default currentDev

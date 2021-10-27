import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import HomeContent from "../components/HomeContent"

// import {StaticQuery, graphql} from "gatsby";

const Home = () => {
//     `
//     query MyQuery {
//   allGoogleReview(sort: {order: DESC, fields: id}) {
//     nodes {
//       date
//       body
//       source_image
//     }
//   }
// }
//     `
   return (

        <Layout>

            <Seo title="TheX National Shrine of Saint Philomena" />
            <HomeHeader/>
            <Menu/>
            <HomeContent/>

        </Layout>
    )
}

export default Home

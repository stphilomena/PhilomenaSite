import * as React from "react"

import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import HomeHeader from "../components/HomeHeader"
import MessageContent from "../components/MessageContent"


const Message = () => (
  <Layout>
    
    <Seo title="The National Shrine of Saint Philomena" />
    <HomeHeader/>
    <Menu/>
    <MessageContent/>
 
  </Layout>
)

export default Message

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import SideCart from "../components/SideCart"
import HomeHeader from "../components/HomeHeader"
import Card from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"

const Shop = ({ data }) => {
  const productsData = data.allContentfulShopProducts.nodes

  return (
    <Layout>
      <Seo title="Shop Devotional Items | National Shrine of Saint Philomena" />
      <HomeHeader />
      <Menu />
      <div className="centerAll py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-5 p-5">
          {productsData.map((productsData) => (
            <Link to="/shop/" className="bg-red-700 p-5 text-white text-3xl">
              <img fluid={productsData.allImageSharp} />
              {productsData.title}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Shop

// graphql query for the product details
export const query = graphql`
  query stPhilomenaShop {
    allContentfulShopProducts {
      nodes {
        contentfulid
        option1name
        option1price
        option1qty
        taxCharge
        title
        slug
        shippingCharge
        description {
          description
        }
        createdAt
        category
        image
      }
    }
    allImageSharp {
      nodes {
        fluid {
          src
        }
      }
    }
  }
`

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import SideCart from "../components/SideCart"
import HomeHeader from "../components/HomeHeader"
import Card from "../components/Card"
import { StaticImage, GatsbyImage, getImage, Img } from "gatsby-plugin-image"

// graphql query for the product details
export const query = graphql`
  query stPhilomenaShop {
    allContentfulShopProducts(sort: { fields: updatedAt, order: DESC }) {
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
        category
        updatedAt
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      pageInfo {
        perPage
      }
    }
  }
`

const Shop = ({ data }) => {
  const productsData = data.allContentfulShopProducts.nodes
  const image = getImage(productsData.localImage)

  console.log(image)

  return (
    <Layout>
      <Seo title="Shop Devotional Items | National Shrine of Saint Philomena" />
      <HomeHeader />
      <Menu />
      <div className="centerAll py-10 w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {productsData.map((productsData) => (
            <div
              to="/shop/"
              className="group flex flex-col items-center text-center gap-3 text-gray-600 uppercase"
            >
              <GatsbyImage
                image={getImage(productsData.localImage)}
                alt={productsData.title}
              />
              {productsData.title}
              <p className="text-5xl">{image}</p>
              <button className="bg-red-700 block mx-auto px-4 py-2 rounded-md text-white">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Shop

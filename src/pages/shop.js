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
      <div className="centerAll py-10 w-10/12 max-w-[1366px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
          {productsData.map((productsData) => (
            <div className="group relative border border-gray-200 rounded-lg hover:shadow-lg duration-200 flex flex-col items-center text-center gap-3 text-gray-600 uppercase">
              <Link to={productsData.slug}>
                <GatsbyImage
                  image={getImage(productsData.localImage)}
                  alt={productsData.title}
                  className="rounded-t-lg"
                />
              </Link>
              <h2 className="text-sm md:text-base px-2 lg:text-xl font-bold uppercase line-clamp-1">
                {productsData.title}
              </h2>
              <div className="flex flex-row justify-around w-full h-10">
                <p className="text-3xl text-red-700 font-bold">
                  ${productsData.option1price}
                </p>
                <div className="flex flex-row justify-around items-center">
                  <p className="rounded-full hover:bg-gray-100 h-8 w-8 flex items-center justify-center mx-2 border border-gray-300 cursor-pointer">
                    -
                  </p>
                  <p>00</p>
                  <p className="rounded-full hover:bg-gray-100 h-8 w-8 flex items-center justify-center mx-2 border border-gray-300 cursor-pointer">
                    +
                  </p>
                </div>
              </div>

              <button className=" bg-red-700 hover:bg-red-600 w-full rounded-b-lg h-10 text-sm text-white">
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

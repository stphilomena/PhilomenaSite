import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { USD_P2 } from "../helpers/NumberHelper"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProductDetails() {
  const data = useStaticQuery(graphql`
    query ProductQuery {
      contentfulShopProducts {
        category
        image
      }
    }
  `)

  const { category } = data.contentfulShopProducts
  const { image } = data.contentfulShopProducts

  return (
    <div>
      Hello <br />
      This is the Category:
      <Link to="#">{category} </Link>
      <br />
      This is the Image:{image} <br />
    </div>
  )
}

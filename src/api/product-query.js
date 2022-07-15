const ProductQuery = {
query MyQuery {
  contentfulShopProducts {
    category
    option1name
    option1price
    shippingCharge
    taxCharge
    title
    createdAt
    contentfulid
    childContentfulShopProductsDescriptionTextNode {
      description
    }
    option1qty
    option2name
    option2price
    option2qty
    slug
    image
  }
}

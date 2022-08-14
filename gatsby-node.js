/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// graphql / schema customization / resolvers for 3rd party images in Graphql
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    ContentfulShopProducts: {
      localImage: {
        type: "File",
        resolve: async (source, args, context, info) => {
          const relativePath = source.image.replace(/[.][.]\/images\//, "")
          return context.nodeModel.findOne({
            type: "File",
            query: { filter: { relativePath: { eq: relativePath } } },
          })
        },
      },
    },
  }
  createResolvers(resolvers)
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `The National Shrine of Saint Philomena`,
    description: `Welcome to the National Shrine of Saint Philomena, a beautiful Virgin and Martyr powerful with God.`,
    author: `SSPX Davie`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    `gatsby-plugin-gatsby-cloud`,
      {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: 'GATSBY_PAYPAL_CLIENT_ID=ASQwqDlBG6cxCWAynbTjbRevQVD7Ihunm4ivgbOF6TUgGIgjtgrVrAiF7CayL3tdnnw6_F8FcRGwlQgL',
        currency: `USD`, // Optional
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

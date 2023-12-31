require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The National Shrine of Saint Philomena`,
    description: `Welcome to the National Shrine of Saint Philomena, a beautiful Virgin and Martyr powerful with God.`,
    author: `SSPX Davie in Broward County, FL`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jr1pigd9tr2u`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "DYo-for9drgxB63XQC4XEGHzp3TYoUBgQgy2EOoBg9o",
      },
    },
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RQ9W1LXF6Z", // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },

    "gatsby-plugin-postcss",
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

    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId:
          "ASQwqDlBG6cxCWAynbTjbRevQVD7Ihunm4ivgbOF6TUgGIgjtgrVrAiF7CayL3tdnnw6_F8FcRGwlQgL",
        currency: `USD`, // Optional
      },
    },
  ],
}

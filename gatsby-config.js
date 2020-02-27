module.exports = {
  siteMetadata: {
    title: `CraftCMS front`,
    description: `Gatsby frontend site for CraftCMS`,
    author: `@albert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
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
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'craft',
        fieldName: 'craft',
        url: 'http://nano33.herokuapp.com/api',
        headers: {
          Authorization: 'Bearer TtiYAPE_DKc-uJbixTCd4Rg9tKA48HfP',
        },  
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

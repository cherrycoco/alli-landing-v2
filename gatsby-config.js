/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Alli Therapists`,
    description: `Alli Therapists`,
    author: `@cherrycoco`,
    siteUrl: `https://welcome.alli.io`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'material icons',
          `Jomhuria`,
          `Lexend\:100,200,300,400,500,600,700,800`,
          'Nothing You Could Do\:400',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        // uri: 'http://localhost:4000/graphql',
        uri: 'https://api.alli.io/graphql',
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'AlliAPI',
        fieldName: 'alliApi',
        url: 'https://api.alli.io/graphql',
        // url: 'http://localhost:4000/graphql',
        // refetchInterval: 120, // Refetch data every 60 seconds (optional)
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

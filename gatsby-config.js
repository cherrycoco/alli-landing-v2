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
    title: `Alli Therapy - Online Therapy for Parents in Ontario`,
    description: `Get matched easily with a licensed counsellor who specialize in helping parents. Our therapists understand the journey of parenthood and are here to help you navigate the challenges.`,
    author: `@alli.io`,
    siteUrl: `https://www.alli.io`,
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
        name: `alli`,
        short_name: `alli`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-yellow.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `g1y1wUMhBzw5YTQDcxVFbYhrfLhyPstD`,
        trackPage: true,
  
        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,
      }
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'P1RDS',
      },
    },
  ],
}

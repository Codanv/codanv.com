const { graphqlIDE, GOOGLE_ANALYTICS_TRACKING_ID } = require('./config')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Codanv',
    description: ` Model real-world entities by designing, coding, analysing and visualizing. In order to do so, we need to have the right mindset and specific domain knowledge. Let's continue the endeavour...`,
    author: 'avi',
    menuLinks:[
      {
        name: 'blog',
        link: '/blog'
      },
      {
          name:'project',
          link:'/project'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`)
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Codanv",
        short_name: "Codanv",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/codanv-c-512-512.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ],
}

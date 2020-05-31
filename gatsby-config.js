const { graphqlIDE } = require('./config')

module.exports = {
  siteMetadata: {
    title: 'Codanv',
    description: `Our ambition is to effectively model real-world objects/situations to software objects/programs by designing, coding, analysing and visualizing. In order to do so, we need to have the right mindset and specific domain knowledge. Let's continue the endeavour...`,
    author: 'avi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
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
        icon: "src/images/codanv-lg-c.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ],
}

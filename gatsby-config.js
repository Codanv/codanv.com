const { graphqlIDE, GOOGLE_ANALYTICS_TRACKING_ID } = require('./config')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Codanv',
    description: `Design Code Analyze Visualize`,
    author: '@Codanv',
    siteUrl: `https://www.codanv.com`,
    menuLinks:[
      {
        name: 'posts',
        link: '/posts/'
      },     
      {
        name: 'categories',
        link: '/categories/'
      },     
      {
        name: 'tags',
        link: '/tags/'
      },          
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.codanv.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + `/posts` + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + `/posts` + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `Codanv RSS Feed`,
          },
        ],
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [
          require('tailwindcss'),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
          ],
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      // resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        // plugins: [
          gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              numberLines: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
        ]
      }
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
      // resolve: 'gatsby-transformer-remark',
      resolve: `gatsby-plugin-mdx`,
      options: {
        // plugins: [
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          // {
          //   resolve: `gatsby-remark-highlight-code`,
          //   options: {
          //     terminal: 'carbon',
          //     theme: 'night-owl',
          //     lineNumbers: true
          //   }
          // },
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

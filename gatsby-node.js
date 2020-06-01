const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const res = await graphql(`
    query {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handling graphql error
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = res.data.postsRemark.edges

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.fields.slug}/`,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Extract tag data from query
  const tags = res.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  //   res.data.allMarkdownRemark.edges.forEach(edge => {
  //     createPage({
  //       component: blogTemplate,
  //       path: `/blog/${edge.node.fields.slug}`,
  //       context: {
  //         slug: edge.node.fields.slug,
  //       },
  //     })
  //   })
}

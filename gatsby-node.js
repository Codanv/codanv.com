const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
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
  const categoryTemplate = path.resolve("src/templates/categories.js")

  const res = await graphql(`
    query {
      postsRemark: allMdx(
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
              categories
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMdx(limit: 2000) {
        group(field: frontmatter___categories) {
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
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
        next,
        previous
      },
    })
  })

  // Extract tag data from query
  const tags = res.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Extract category data from query
  const categories = res.data.categoriesGroup.group

  // Make category pages
  categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Create blog-list pages
  // using the posts declared above
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //   res.data.allMdx.edges.forEach(edge => {
  //     createPage({
  //       component: blogTemplate,
  //       path: `/post/${edge.node.fields.slug}`,
  //       context: {
  //         slug: edge.node.fields.slug,
  //       },
  //     })
  //   })
}

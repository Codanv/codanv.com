import React from "react"
import PropTypes from "prop-types"

import { Link, graphql } from "gatsby"
import blogListStyles from "./blog-list.module.scss"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Head from "../components/head"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } with category "${category}"`

  return (
    <Layout>
      <Head title={categoryHeader} 
      canonical={`https://www.codanv.com/blog/categories/${kebabCase(category)}/`} />
      <p>
        <Link to="/blog">← All Blog Posts</Link>
      </p>
      
      <h1>{categoryHeader}</h1>

      <p>
        <Link to="/blog/categories">← View all Categories?</Link>
      </p>

      <ul className={blogListStyles.posts}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug} className={blogListStyles.post} >
              <Link to={`/blog/${slug}/`}>
                <h3>{title}</h3>
              </Link>
              <span className={blogListStyles.titleDetails}><a style={{display: `inline`}} href={node.frontmatter.handle} target="_blank" rel="noopener noreferrer">{node.frontmatter.user}</a> on {node.frontmatter.date} · {node.timeToRead} min read </span>
              <p>{node.frontmatter.description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            user
            handle
            description

          }
        }
      }
    }
  }
`

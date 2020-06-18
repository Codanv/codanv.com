import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

import blogListStyles from "./blog-list.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Head title={tagHeader} 
      canonical={`https://www.codanv.com/blog/tags/${kebabCase(tag)}/`} />
      <p><Link to="/blog">← All Blog Posts</Link></p>

      <h1>{tagHeader}</h1>
      <p><Link to="/blog/tags">← View all Tags?</Link></p>

      <ul className={blogListStyles.posts}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug} className={blogListStyles.post}>
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

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
          timeToRead
        }
      }
    }
  }
`
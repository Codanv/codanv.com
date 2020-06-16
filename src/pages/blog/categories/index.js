import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Head from "../../../components/head"
import Layout from "../../../components/layout"
import { Link, graphql } from "gatsby"

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Head title={title} />
    <div>
      <p><Link to="/blog">← All Blog Posts</Link></p>
      <h3><Link to="/blog/tags">Browse by tags?</Link></h3>

      <h1>Categories</h1>
      <ul style={{listStyleType: `none`, margin: 0, display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`}}>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/blog/categories/${kebabCase(category.fieldValue)}/`}>
              <span style={{fontSize: `1.5rem`, textDecoration: `underline`}}>{category.fieldValue} {/*({category.totalCount})*/}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

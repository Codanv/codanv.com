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
  },
}) => (
  <Layout>
    <Head title="Categories" canonical="https://www.codanv.com/categories/" />
    <div>
      <p><Link to="/blog">← All Posts</Link></p>
      <p><Link to="/blog/tags">Tags?</Link></p>

      <h1>Categories</h1>
      <ul style={{listStyleType: `none`, margin: 0, display: `flex`, justifyContent: `space-evenly`, flexWrap: `wrap`}}>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/blog/categories/${kebabCase(category.fieldValue)}/`}>
        <span style={{fontSize: `1rem`, textDecoration: `underline`, marginRight: `0.5rem`}}>{category.fieldValue} ({category.totalCount})</span>
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

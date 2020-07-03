import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Head from "../components/head"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const CategoriesPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <>
    <Head title="Categories" canonical="https://www.codanv.com/categories/" />
    <Layout>
      <div>
        <h1>All Categories</h1>
        <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
          {group.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
          <span style={{fontSize: `1.2rem`, textDecoration: `underline`, marginRight: `1.2rem`}}>{category.fieldValue} ({category.totalCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  </>
)

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

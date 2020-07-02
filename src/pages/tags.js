import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Head from "../components/head"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Head title="Tags" canonical="https://www.codanv.com/tags/" />
    <div>
            
      <h1>All Tags</h1>
      <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <span style={{fontSize: `1.1rem`, marginRight: `1.1rem`}} >#{tag.fieldValue} ({tag.totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
  query {
   allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
import React from "react"
import {Link, graphql} from "gatsby"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = ({
  data: {
    allMdx: { group },
  },
}) => {

  
  return (
    <>
      <Head title="Home" lang="en" canonical="https://www.codanv.com" />
      <Layout>
        <>
          <div style={{marginBottom: `6rem`, padding: `0.5rem`, textAlign: `center`, height: `30vh`}}>
            <h1 className={indexStyles.title}>
            Design Code Analyze Visualize</h1>
            <a href="https://tinyletter.com/codanv" target="_blank" rel="noreferrer noopener" style={{border: `1px solid rgba(0, 0, 0, 0.2)`, padding: `0.5rem 1rem`, borderRadius: `0.2rem`, boxShadow: `0.2rem 0.2rem 0.3rem #000000`, marginRight: `1rem`}}>SUBSCRIBE</a>

            <Link to="/posts" style={{border: `1px solid rgba(0, 0, 0, 0.2)`, padding: `0.5rem 1rem`, borderRadius: `0.2rem`, boxShadow: `0.2rem 0.2rem 0.3rem #000000`}}>Explore</Link>
          </div>

          <div className={indexStyles.section}>
            <h2 >Writing</h2>
            <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
              {group.map(category => (
                <li key={category.fieldValue} style={{marginRight: `1.2rem`}}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  <span>{category.fieldValue}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
        </>
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`

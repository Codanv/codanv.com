import React from "react"
import {Link, query} from "gatsby"
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
      <Head title="Home" lang="en" canonical="https://www.codanv.com/" />
      <Layout>
        <>
          <div className={indexStyles.intro}>
            <h1 className={indexStyles.title}><a className={indexStyles.avi} href="https://twitter.com/Avinashkumar_2" target="_blank"  rel="noopener noreferrer">Avinash Kumar</a></h1>
         
            <span>Design Code Analyze Visualize</span>
            <hr />
          </div>

          <div className={indexStyles.writing}>
            <h2>Writing</h2>
            <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
              {group.map(category => (
                <li key={category.fieldValue}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  <span style={{fontSize: `1.2rem`, marginRight: `1.2rem`}}>{category.fieldValue}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
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

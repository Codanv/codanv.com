import React, { useState } from "react"
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

  const [contact, setContact] = useState('View email address')

  return (
    <>
      <Head title="Home" lang="en" canonical="https://www.codanv.com" />
      <Layout>
        <>
          <div style={{marginBottom: `6rem`, padding: `0.5rem`}}>
            <h1 className={indexStyles.title}>Hi, I'm Avinash.</h1>
            <span>Design Code Analyze Visualize</span>
            <hr />
          </div>

          <div className={indexStyles.section}>
            <h2 >Writing</h2>
            <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
              {group.map(category => (
                <li key={category.fieldValue} style={{marginRight: `1.2rem`}}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  <span>{category.fieldValue}</span>
                  </Link>
                  <hr />
                </li>
              ))}
            </ul>
          </div>

          <div className={indexStyles.section}>
            <h2>Contact</h2>
            For business inquires: {" "}
            <button onClick={() => {setContact("avinash@codanv.com")}}>{contact}           
            </button>
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

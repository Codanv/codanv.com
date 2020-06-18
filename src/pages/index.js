import React from "react"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = ({data: {allMarkdownRemark: {group}}}) => {
  return (
    <Layout>
      <Head title="Home" lang="en" canonical="https://www.codanv.com/" />
      <div className={indexStyles.center}>
        <h1 className={indexStyles.title}>Have the right mindset and specific domain knowledge</h1>

        <p style={{textAlign: `center`}}>Let's continue the endeavour...</p>
        
        <ul className={indexStyles.domains}>
          {group.map(category => (
            <Link  key={category.fieldValue} to={`/blog/categories/${kebabCase(category.fieldValue)}/`}>
              <li className={indexStyles.domain}>
                {category.fieldValue}
              </li>
            </Link>
          ))}
      </ul>

      <p style={{textAlign: `center`}}>Choose your domain</p>

      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___categories) {
      fieldValue
    }
  }
}`
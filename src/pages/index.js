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
      <Head title="Home" />
      <div className={indexStyles.center}>
        <h1 className={indexStyles.title}>Have the right mindset and specific domain knowledge</h1>
        <ul className={indexStyles.domains}>
          {group.map(category => (
            <li key={category.fieldValue} className={indexStyles.domain}>
              <Link to={`/blog/categories/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue}
              </Link>
            </li>
          ))}
      </ul>
      <p>Let's continue the endeavour...</p>
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
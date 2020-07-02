import React from "react"
import { Link, graphql } from "gatsby"


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
    <Layout>
      <Head title="Home" lang="en" canonical="https://www.codanv.com/" />

      <div className={indexStyles.center}>
        <h1 className={indexStyles.title}>
          Right mindset with specific domain knowledge
        </h1>

        <p style={{ textAlign: `center` }}>Let's continue the endeavour...</p>

        <ul className={indexStyles.domains}>
          {group.map(category => (
            <Link
              key={category.fieldValue}
              to={`/categories/${kebabCase(category.fieldValue)}/`}
            >
              <li className={indexStyles.domain}>{category.fieldValue}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`

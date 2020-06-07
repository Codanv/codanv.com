import React from "react"
import { Link } from "gatsby"
import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.center}>
        <h1>Model real life entities by designing, coding, analysing and    visualizing
        </h1>
        <p>In order to do so, we need to have the right mindset and specific   domain knowledge
        </p>
        
        <p>
          <span className={indexStyles.blogLink}>
            <Link to="/blog">Get Started →</Link>
          </span>
        </p>
        <p> Let's continue the endeavour...</p>
      </div>
    </Layout>
  )
}

export default IndexPage

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
        <h1>Design, code, analyse & visualize</h1>
        <p>Our ambition is to effectively model real-world objects/situations to software objects/programs by designing, coding, analysing and    visualizing.
        </p>
        <p>In order to do so, we need to have the right mindset and specific   domain knowledge.
        </p>
        <p> Let's continue the endeavour...</p>
        <p> explore{" "} 
          <span className={indexStyles.blogLink}>
            <Link to="/blog">Blog</Link>
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage

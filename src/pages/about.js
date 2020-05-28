import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <h2>John Doe</h2>
      <p>
        Do you want to <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

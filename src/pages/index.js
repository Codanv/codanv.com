import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import dcav from "./dcav.png"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <img src={dcav} alt="Design Code Analize Visualize" />
      <p>{`explore the site :)`}</p>
    </Layout>
  )
}

export default IndexPage

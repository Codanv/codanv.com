import React from "react"

import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {

  return (
    <>
      <Head title="Home" lang="en" canonical="https://www.codanv.com/" />
      <Layout>
        <>
          <h1 className={indexStyles.title}>Design Code Analize Visualize</h1>
          <div>
            <a className={indexStyles.avi} href="https://twitter.com/Avinashkumar_2" target="_blank"  rel="noopener noreferrer">Avinash Kumar</a>
            <hr />
            Programming | Life Hacks
          </div>
        </>
      </Layout>
    </>
  )
}

export default IndexPage


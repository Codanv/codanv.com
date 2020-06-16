import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>{`Get in touch :)`}</h1>
      <p>
        <a href="https://twitter.com/codanv" target="_blank" rel="noopener noreferrer">Twitter</a>     
      </p>
      <p>
        <a href="https://instagram.com/thecodanv" target="_blank" rel="noopener noreferrer">Instagram</a>     
      </p>
    </Layout>
  )
}

export default ContactPage

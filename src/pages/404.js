import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" description="Page not found" lang="en" />
            <h1>Page not found</h1>
            <small>find your interests from here</small>
            <p><Link to="/">Codanv landing page</Link></p>
        </Layout>
    )
}

export default NotFound
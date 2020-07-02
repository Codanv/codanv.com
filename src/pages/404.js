import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" description="Page not found" lang="en" />
            <h1>Sorry, that page doesn’t exist!</h1>
           <p>Why not <Link to="/categories">explore</Link> to find your interests?</p>
        </Layout>
    )
}

export default NotFound
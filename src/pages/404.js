import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" description="Page not found" lang="en" />
            <h1>Page not found</h1>
            <p>
                <Link to="/">Head Home</Link>
            </p>
        </Layout>
    )
}

export default NotFound
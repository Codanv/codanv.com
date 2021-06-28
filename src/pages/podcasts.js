import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"

const Podcasts = () => {
    return (
        <>
            <Head  title="Podcasts" canonical="https://www.codanv.com/podcasts/" />
            <Layout>
                <h1>Podcasts</h1>
                <p>
                    <h2>Open Source - Series Introduction</h2>
                    This series is dedicated to right from contributing, creating to maintaining open source projects in details.

                    In this episode there is a list of questions which you can expect to be answered in this series. This is equally beneficial for beginners and experienced learners.

                    So do listen and share with your friends. keep learning!
                <a 
                    href="https://anchor.fm/codanv/episodes/S01E01---Open-Source---Series-Introduction--Codanv-e13ih93"
                    target="_blank"
                    rel="noopener noreferrer"
                >S01E01 - Open Source - Series Introduction</a>
                    
                </p>
            </Layout>
        </>
    )
}

export default Podcasts
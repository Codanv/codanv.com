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
                    <a 
                        href="https://anchor.fm/codanv/episodes/S01E01---Open-Source---Series-Introduction--Codanv-e13ih93"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <h3>S01E01 - Open Source - Series Introduction</h3>
                   </a>
                    <p>
                        <iframe src="https://anchor.fm/codanv/embed/episodes/S01E01---Open-Source---Series-Introduction--Codanv-e13ih93" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
                    </p>
                    This series is dedicated to right from contributing, creating to maintaining open source projects in details.

                    In this episode there is a list of questions which you can expect to be answered in this series. This is equally beneficial for beginners and experienced learners.

                    So do listen and share with your friends. keep learning!
                </p>

                <p>
                    <a
                        href="https://anchor.fm/codanv/episodes/S01E02---Open-Source---What-and-Why-e13k9do"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>S01E02 - Open Source - What and Why</h3>
                    </a>
                    <p>
                        <iframe src="https://anchor.fm/codanv/embed/episodes/S01E02---Open-Source---What-and-Why-e13k9do" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
                    </p>
                    Welcome to `What and Why` episode of `Open Source` series. There are three main concerns discussed in this episode -
                    <ul>
                        <li>What does mean to be a open source project?</li>
                        <li>Is every open source project free of charge?</li>
                        <li>Why does people opensource their project or work?</li>
                    </ul>  
                    liked it! Share  with your friends and colleague.
                </p>
            </Layout>
        </>
    )
}

export default Podcasts
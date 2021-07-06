import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"

const Podcasts = () => {
    return (
        <>
            <Head  title="Podcasts" canonical="https://www.codanv.com/podcasts/" />
            <Layout>
                <h1>Podcasts</h1>

                <p>Available on several platforms</p>

                <p><a href="https://open.spotify.com/show/7DKSqNSYfUniEeqOqNOdFj" target="_blank" rel="noopener noreferrer">Spotify</a></p>

                <p><a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yY2QyZWQ0MC9wb2RjYXN0L3Jzcw==" target="_blank" rel="noopener noreferrer">Google Podcast</a></p>

                <p><a href="https://www.breaker.audio/codanv" target="_blank" rel="noopener noreferrer">Breaker</a></p>

                <p><a href="https://radiopublic.com/codanv-WxBxb7" target="_blank" rel="noopener noreferrer">Radio Public</a></p>

                <p><a href="https://anchor.fm/codanv" target="_blank" rel="noopener noreferrer">Anchor</a></p>

                <small style={{marginTop: `1rem`}}><a href="https://anchor.fm/s/2cd2ed40/podcast/rss">Podcast RSS</a></small>
            </Layout>
        </>
    )
}

export default Podcasts
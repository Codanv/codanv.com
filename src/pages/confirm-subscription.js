import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

export default () => (
    <Layout>
    <div style={{textAlign: `center`, marginTop: `3rem`, boxShadow: `0.3rem 0.3rem 0.5rem #e4e4e4`, padding: `1rem`, borderRadius: `0.5rem`}}>
      
        <h2 style={{color: `#6c9254`, fontSize: `1.5rem` }}>Subscription confirmed!</h2>
        <p>Boom! You're officially confirmed and on the list. Expect some great emails headed your way very soon.</p>
        <p>Close the window or <Link to="/categories">explore</Link></p>
       
    </div>
    </Layout>
)

import React, { useState, useEffect } from "react"
import {Link, graphql} from "gatsby"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = ({
  data: {
    allMdx: { group },
  },
}) => {

  const [contact, setContact] = useState('View email address')
  
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://avinashkumar.ck.page/09b0399ef4/index.js";
    script.async = true;
    
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Head title="Home" lang="en" canonical="https://www.codanv.com" />
      <Layout>
        <>
          <div style={{marginBottom: `6rem`, padding: `0.5rem`, textAlign: `center`, height: `30vh`}}>
            <h1 className={indexStyles.title}>
            Design Code Analyze Visualize</h1>
            <Link to="/posts" style={{border: `1px solid rgba(0, 0, 0, 0.2)`, padding: `0.5rem`, borderRadius: `0.2rem`, boxShadow: `0.2rem 0.2rem 0.3rem #000000`}}>Get Started</Link>
          </div>

          <div className={indexStyles.section}>
            <h2 >Writing</h2>
            <ul style={{listStyleType: `none`, margin: 0, display: `flex`, flexWrap: `wrap`}}>
              {group.map(category => (
                <li key={category.fieldValue} style={{marginRight: `1.2rem`}}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  <span>{category.fieldValue}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={indexStyles.section}>
            <h2>Contact</h2>
            For business inquires: {" "}
            <button onClick={() => {setContact("avinash@codanv.com")}}>{contact}           
            </button>
          </div>

          <script async data-uid="09b0399ef4" src="https://avinashkumar.ck.page/09b0399ef4/index.js"></script>
        </>
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`

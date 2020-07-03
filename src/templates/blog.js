import React, {useEffect} from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import Prism from "prismjs"
// import "prismjs/plugins/line-numbers/prism-line-numbers.js"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Head from "../components/head"
import User from "../components/user"
import blogStyles from "./blog.module.scss"

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const Blog = props => {
  useEffect(() => {
    // Prism.highlightAll()
    deckDeckGoHighlightElement();
  }, [])



  return (
    <>
      <Head
        title={props.data.mdx.frontmatter.title}
        canonical={props.data.mdx.frontmatter.canonical}
      />
      <Layout>
        <h1 className={blogStyles.title}>
          {props.data.mdx.frontmatter.title}
        </h1>
        <spam className={blogStyles.date}>
          {props.data.mdx.frontmatter.date} ·{" "}
          {props.data.mdx.timeToRead} min read
        </spam>
        <ul className={blogStyles.tags}>
          {props.data.mdx.frontmatter.tags.map(tag => {
            return (
              <li>
                <Link to={`/tags/${tag}`} className={blogStyles.tag}>
                  #{tag}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* <div
          className={blogStyles.content}
          dangerouslySetInnerHTML={{ __html: props.data.mdx.html }}
        ></div> */}
        <MDXRenderer className={blogStyles.content}>{props.data.mdx.body}</MDXRenderer>

        <ul className={blogStyles.tags} style={{ marginBottom: `3rem` }}>
          {props.data.mdx.frontmatter.categories.map(category => {
            return (
              <li>
                <Link
                  to={`/categories/${kebabCase(category)}`}
                  className={blogStyles.tag}
                >
                  {category}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to="/categories"> All Categories</Link>
          </li>
        </ul>

        <User
          writer={props.data.mdx.frontmatter.writer}
          // avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          handle={props.data.mdx.frontmatter.handle}
          excerpt="Leraning Enthusiast"
        />
      </Layout>
    </>
  )
}

export default Blog

export const query = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, Y")
        writer
        handle
        tags
        categories
        canonical
      }
      body
      timeToRead
    }
  }
`

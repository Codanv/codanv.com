import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"

import Prism from "prismjs"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Head from "../components/head"
import User from "../components/user"
import blogStyles from "./blog.module.scss"

const Blog = props => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout>
      <Head
        title={props.data.markdownRemark.frontmatter.title}
        canonical={props.data.markdownRemark.frontmatter.canonical}
      />
      <p>
        <Link to="/blog">← All Blog Posts</Link>
      </p>
      <h1 className={blogStyles.title}>
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <spam className={blogStyles.date}>
        {props.data.markdownRemark.frontmatter.date} ·{" "}
        {props.data.markdownRemark.timeToRead} min read
      </spam>
      <ul className={blogStyles.tags}>
        {props.data.markdownRemark.frontmatter.tags.map(tag => {
          return (
            <li>
              <Link to={`/blog/tags/${tag}`} className={blogStyles.tag}>
                #{tag}
              </Link>
            </li>
          )
        })}
        <li className={blogStyles.viewall}>
          <Link to="/blog/tags"> View all Tags</Link>
        </li>
      </ul>

      <div
        className={blogStyles.content}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>

      <ul className={blogStyles.tags} style={{ marginBottom: `3rem` }}>
        {props.data.markdownRemark.frontmatter.categories.map(category => {
          return (
            <li>
              <Link
                to={`/blog/categories/${kebabCase(category)}`}
                className={blogStyles.tag}
              >
                {category}
              </Link>
            </li>
          )
        })}
        <li className={blogStyles.viewall}>
          <Link to="/blog/categories"> View all Categories</Link>
        </li>
      </ul>

      <User
        writer={props.data.markdownRemark.frontmatter.writer}
        // avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        handle={props.data.markdownRemark.frontmatter.handle}
        excerpt="Leraning Enthusiast"
      />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, Y")
        writer
        handle
        tags
        categories
        canonical
      }
      html
      timeToRead
    }
  }
`

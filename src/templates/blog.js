import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import User from "../components/user"
import blogStyles from "./blog.module.scss"

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <p>
        <Link to="/blog/">← Blog</Link>
      </p>
      <spam className={blogStyles.date}>
      <a href={props.data.markdownRemark.frontmatter.handle} target="_blank" rel="noopener noreferrer">{props.data.markdownRemark.frontmatter.user}</a> on {props.data.markdownRemark.frontmatter.date} · {props.data.markdownRemark.timeToRead} min read 
      </spam>
      <h1 className={blogStyles.title}>
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <ul className={blogStyles.tags}>
        {props.data.markdownRemark.frontmatter.tags.map(tag => {
          return (
            <li>
            <Link to={`/blog/tags/${tag}`} className={blogStyles.tag} >
              #{tag}
            </Link>
            </li>
          )
        })}
        <li className={blogStyles.viewall}>
          <Link to="/blog/tags" > View all Tags</Link>
        </li>
      </ul>

      <div
        className={blogStyles.content}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>

       <ul className={blogStyles.tags}>
        {props.data.markdownRemark.frontmatter.categories.map(category => {
          return (
            <li>
            <Link to={`/blog/categories/${category}`} className={blogStyles.tag} >
              {category}
            </Link>
            </li>
          )
        })}
        <li className={blogStyles.viewall}>
          <Link to="/blog/categories" > View all Categories</Link>
        </li>
      </ul>

      <User
        username={props.data.markdownRemark.frontmatter.user}
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
        user
        handle
        tags
        categories
      }
      html
      timeToRead
    }
  }
`

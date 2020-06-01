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
      <ul className={blogStyles.tags}>
        {props.data.markdownRemark.frontmatter.tags.map(tag => {
          return (
            <Link to={`/blog/tags/${tag}`}>
              <li className={blogStyles.tag}>#{tag}</li>
            </Link>
          )
        })}
        <Link to="/blog/tags">
          <li className={`${blogStyles.tag} ${blogStyles.lasttag}`} >View all tags</li>
        </Link>
      </ul>
      <h1 className={blogStyles.title}>
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <p className={blogStyles.date}>
        {props.data.markdownRemark.frontmatter.date}
      </p>
      <div
        className={blogStyles.content}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <User
        username={props.data.markdownRemark.frontmatter.user}
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
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
        date(formatString: "MMMM DD, Y")
        user
        tags
      }
      html
    }
  }
`

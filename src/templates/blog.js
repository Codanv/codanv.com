import React from "react"
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

// const Blog = (props) => {
export default class Blog extends React.Component {  
  // useEffect(() => {
  //   // Prism.highlightAll()
  //   deckDeckGoHighlightElement();
  // }, [])

  componentDidMount() {
    deckDeckGoHighlightElement();
  }

  render() {
    const { previous, next } = this.props.pageContext;
    
   
    const nextPost = next && (
      <Link to={`posts${next.fields.slug}`} >
        <strong>Next Post</strong> <br/>
        {next.frontmatter.title}
      </Link>
    )

    const prevPost = previous && (
      <Link to={`posts${previous.fields.slug}`} >
        <strong>Previous Post</strong> <br/>
        {previous.frontmatter.title}
      </Link>
    )

    return (
      <>
        <Head
          title={this.props.data.mdx.frontmatter.title}
          canonical={this.props.data.mdx.frontmatter.canonical}
        />
        <Layout>
          <h1 className={blogStyles.title}>
            {this.props.data.mdx.frontmatter.title}
          </h1>
          <span className={blogStyles.date}>
            {this.props.data.mdx.frontmatter.date} ·{" "}
            {this.props.data.mdx.timeToRead} min read
          </span>
          <ul className={blogStyles.tags}>
            {this.props.data.mdx.frontmatter.tags.map(tag => {
              return (
                <li key={tag}>
                  <Link to={`/tags/${tag}`} className={blogStyles.tag}>
                    #{tag}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* <div
            className={blogStyles.content}
            dangerouslySetInnerHTML={{ __html: this.props.data.mdx.html }}
          ></div> */}
          <MDXRenderer className={blogStyles.content}>{this.props.data.mdx.body}</MDXRenderer>

          <ul className={blogStyles.tags}>
            {this.props.data.mdx.frontmatter.categories.map(category => {
              return (
                <li key={category}>
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
            writer={this.props.data.mdx.frontmatter.writer}
            // avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            handle={this.props.data.mdx.frontmatter.handle}
            excerpt="Leraning Enthusiast"
          />


          <div className={blogStyles.postNavigation}>
            <div style={{justifySelf: `flex-start`, flex: `1`}}>{prevPost}</div>
            <div style={{justifySelf: `flex-end`}}>{nextPost}</div>
          </div>

        </Layout>
      </>
    )
  }
  
}

// export default Blog

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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

const Blog = props => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title} />
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div> */}
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.publishedDate}</p>
      {
        documentToReactComponents(props.data.contentfulBlog.body.json, options)
      }

    </Layout>
  )
}

export default Blog

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String) {
    contentfulBlog(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      body {
        json
      }
    }
  }
`

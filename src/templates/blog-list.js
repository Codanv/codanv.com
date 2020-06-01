import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { rhythm } from "../utils/typography"
import blogListStyles from "./blog-list.module.scss"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <Head title="blog" />
        <h1>Blog</h1>
        <span className={blogListStyles.alltags}><Link to="/blog/tags">View all tags?</Link></span>
        {posts.map(({ node }) => {
          // const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <ol
                className={blogListStyles.posts}
              >
                <li className={blogListStyles.post}>
                  <Link
                    style={{ boxShadow: "none" }}
                    to={`/blog/${node.fields.slug}`}
                  >
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.date} . {node.frontmatter.user}</p>
                    <p>{node.excerpt}</p>
                  </Link>
                </li>
              </ol>
            </div>
          )
        })}

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/blog/${i === 0 ? "" : i + 1}`}
              style={{
                padding: rhythm(1 / 4),
                textDecoration: "none",
                color: i + 1 === currentPage ? "#ffffff" : "",
                background: i + 1 === currentPage ? "#007acc" : "",
              }}
            >
              {i + 1}
            </Link>
          ))}

          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            user
          }
        }
      }
    }
  }
`
// export const pageQuery = graphql`
//   query blogPageQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `;

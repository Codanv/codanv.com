import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogListStyles from "./blog-list.module.scss"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <Head title="blog" />
    <h1>All Blog Posts <small className={blogListStyles.totalCount}>{`${totalCount}`}</small></h1>
        <p>
          <Link className={blogListStyles.browse}  to="/blog/categories">Browse by categories?</Link>{" "}
          <Link className={blogListStyles.browse} to="/blog/tags">Browse by tags?</Link>
        </p>

        {posts.map(({ node }) => {
          return (
              <ol className={blogListStyles.posts}>
                <li key={node.fields.slug} className={blogListStyles.post}>
                  <Link
                    style={{ boxShadow: "none",  }}
                    to={`/blog/${node.fields.slug}`}
                    >
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                    <span className={blogListStyles.titleDetails}><a style={{display: `inline`}} href={node.frontmatter.handle} target="_blank" rel="noopener noreferrer">{node.frontmatter.user}</a> on {node.frontmatter.date} · {node.timeToRead} min read </span>
                    <p>{node.frontmatter.description}</p>
                </li>
              </ol>
          )
        })}

        <ul className={blogListStyles.pageNavigationList}>
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
                // padding: rhythm(1 / 4),
                textDecoration: "none",
                color: i + 1 === currentPage ? "#333333" : "#1ca086",
                background: i + 1 === currentPage ? "#e4e4e4" : "",
                padding: "0 0.5rem"
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
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            user
            handle
            description
          }
          timeToRead
        }
      }
      totalCount
    }
  }
`


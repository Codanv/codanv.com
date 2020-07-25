import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogListStyles from "./blog-list.module.scss"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    // const totalCount = this.props.data.allMdx.totalCount
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <>
        <Head title="All Blog Posts" canonical="https://www.codanv.com/blog/" />  
        <Layout>
        {/* <small className={blogListStyles.totalCount}>{`${totalCount}`}</small> -- old implementation */}
        <h1 style={{marginBottom: `3rem`}}>All Blog Posts</h1>
        
          {posts.map(({ node }) => {
            return (
                <ol key={node.fields.slug} className={blogListStyles.posts}>
                  <li className={blogListStyles.post}>
                    <Link
                      style={{ boxShadow: "none",  }}
                      to={`/${node.fields.slug}`}
                      >
                      <h3>{node.frontmatter.title}</h3>
                    </Link>
                      {/* <span className={blogListStyles.titleDetails}>
                        Published on {node.frontmatter.date}
                        { · {node.timeToRead} min read  }
                      </span> */}
                      <p>{node.frontmatter.description}</p>
                  </li>
                </ol>
            )
          })}

          <ul className={blogListStyles.pageNavigationList}>
            {!isFirst && (
              <Link to={`/${prevPage}`} rel="prev">
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
                  borderRadius: `0.2rem`,
                  boxShadow: `0.2rem 0.2rem 0.2rem #000000`,
                  color: i + 1 === currentPage ? "#333333" : "#1ca086",
                  background: i + 1 === currentPage ? "#e4e4e4" : "",
                  padding: "0 0.5rem"
                }}
              >
                {i + 1}
              </Link>
            ))}

            {!isLast && (
              <Link to={`/${nextPage}`} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
        </Layout>
      </>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
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
            title
            description
          }
        }
      }
    }
  }
`

//  date(formatString: "MMM DD, YYYY")
//  totalCount -- query
//  timeToRead -- query

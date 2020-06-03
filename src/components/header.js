import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      codanvLogo: file(relativePath: { eq: "images/codanv-clipped.png" }) {
        childImageSharp {
          fixed(width: 170, height: 41) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      siteNavigation: site {
        siteMetadata {
          title 
          menuLinks {
            name 
            link
          }
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.content}>
          <h1 className={headerStyles.title}>
            <Link
              to="/"
            >
              <Img fixed={data.codanvLogo.childImageSharp.fixed} alt={data.siteNavigation.siteMetadata.title} />
            </Link>
          </h1>
          <div>
            <nav>
              <ul className={headerStyles.navList}>
                {data.siteNavigation.siteMetadata.menuLinks.map(link => (
                  <li
                    key={link.name}
                    className={headerStyles.link}
                  >
                    <Link to={link.link} activeClassName={headerStyles.activeNavItem} >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


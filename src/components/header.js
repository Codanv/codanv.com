import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import './header.module.scss'
import headerStyles from "./header.module.scss"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      codanvLogo: file(relativePath: { eq: "images/codanv-clipped.png" }) {
        childImageSharp {
          fixed(width: 100, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link to="/" >
        
      </Link>
      
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              <Img fixed={data.codanvLogo.childImageSharp.fixed} alt="Codanv logo" />
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/project"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

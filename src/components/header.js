import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
// import Img from "gatsby-image"

const Header = () => {
  // -- logo(static) part of query --
   // codanvLogo: file(relativePath: { eq: "images/codanv-clipped.png" }) {
    //   childImageSharp {
    //     fixed(width: 170, height: 41) {
    //       ...GatsbyImageSharpFixed
    //     }
    //   }
    // }
  const data = useStaticQuery(graphql`
    query {
    
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

      <div className={headerStyles.logo}>
        <Link to="/" style={{ border: `none`}} >
          {/* <Img fixed={data.codanvLogo.childImageSharp.fixed} alt={data.siteNavigation.siteMetadata.title} /> */}
          <span style={{color: `#d0644d`}}>Co</span><span style={{color: `#6c9254`}}>d</span><span style={{color: `#f1b148`}}>an</span><span style={{color: `#41a7ec`}}>v</span>
        </Link>
      </div>

      <nav>
        <ul className={headerStyles.topnav} id="navtop">
          {data.siteNavigation.siteMetadata.menuLinks.map(link => (
            <li
              key={link.name}
              style={{marginRight: `1rem`}}
            >
              <Link to={link.link} className={headerStyles.link}>
              {/* activeClassName={headerStyles.activelink} -- older*/}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
       
    </header>
 
  )
}

export default Header



    

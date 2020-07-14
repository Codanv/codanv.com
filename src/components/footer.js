import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import FooterStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (

    <footer className={FooterStyles.footer}>
        <hr />
        <div style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexWrap: `wrap`
        }}>
            <div>
                <ul>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                </ul>
            </div>
            <div>
                <ul>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <a href="https://twitter.com/codanv" rel="noopener noreferrer" target="_blank">Twitter</a>
                </li>
                <li>
                    <a href="https://instagram.com/thecodanv" rel="noopener noreferrer" target="_blank">Instagram</a>
                </li>
                </ul>
            </div>
            <div>
            <ul>
                <li>
                    <a href="https://codanv.ck.page/09b0399ef4" target="_blank" rel="noreferrer noopener">SUBSCRIBE</a>
                </li>
                <li>
                    <Link to="/rss.xml">RSS</Link>
                </li>
            </ul>
            </div>
        </div>
          
          <p style={{textAlign: 'center'}}>{data.site.siteMetadata.title} © 2020</p>
    </footer>              
    )
}

export default Footer




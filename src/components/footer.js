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
             <ul>
                <li>{data.site.siteMetadata.title} © 2020</li>
                <li>
                    <a href="https://twitter.com/codanv" rel="noopener noreferrer" target="_blank">Twitter</a>
                </li>
                <li>
                    <a href="https://instagram.com/thecodanv" rel="noopener noreferrer" target="_blank">Instagram</a>
                </li>
                <li>
                    <Link to="/rss.xml">rss</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

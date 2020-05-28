import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
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
            <p>{data.site.siteMetadata.title} © 2020  </p>
        </footer>
    )
}

export default Footer
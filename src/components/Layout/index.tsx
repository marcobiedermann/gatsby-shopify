import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Header from "../Header"
import "./layout.css"

const Layout: FC = props => {
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
      </Header>
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout

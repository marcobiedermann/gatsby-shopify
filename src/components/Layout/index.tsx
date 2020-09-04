import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import {
  COLLECTIONS,
  PRIVACY_POLICY,
  PRODUCTS,
  REFUND_POLICY,
  TERMS_OF_SERVICE,
} from "../../constants/routes"
import Header from "../Header"
import Navigation from "../Navigation"

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
        <Navigation routes={[COLLECTIONS, PRODUCTS]} />
      </Header>
      <div>
        <main>{children}</main>
        <footer>
          <Navigation
            routes={[PRIVACY_POLICY, REFUND_POLICY, TERMS_OF_SERVICE]}
          />
        </footer>
      </div>
    </>
  )
}

export default Layout

import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import {
  COLLECTIONS,
  PRIVACY_POLICY,
  PRODUCTS,
  REFUND_POLICY,
  TERMS_OF_SERVICE,
} from "../../constants/routes"
import Breadcrumb from "../Breadcrumb"
import Header from "../Header"
import Navigation from "../Navigation"

export interface LayoutProps {
  location: any
}

const Layout: FC<LayoutProps> = props => {
  const { children, location } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const segments = location.pathname.split("/").filter(segment => segment)
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`

    return {
      name: segment,
      path,
    }
  })

  return (
    <>
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
        <Navigation routes={[COLLECTIONS, PRODUCTS]} />
      </Header>
      <div>
        <main>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
          {children}
        </main>
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

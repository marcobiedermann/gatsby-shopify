import React, { FC } from "react"
import Layout from "../../components/Layout"
import Page, { PageProps } from "../../components/Page"

export interface PageTemplateProps {
  pageContext: {
    page: PageProps
  }
}

const PageTemplate: FC<PageTemplateProps> = props => {
  const { pageContext } = props
  const { page } = pageContext

  return (
    <Layout>
      <Page {...page} />
    </Layout>
  )
}

export default PageTemplate

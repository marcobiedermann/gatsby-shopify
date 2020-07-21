import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/Layout"
import Page from "../../components/Page"

export interface DataProps {
  shopifyPage: {
    body: string
    handle: string
    shopifyId: string
    title: string
  }
}

const PageTemplate: FC<PageProps<DataProps>> = props => {
  const {
    data: { shopifyPage },
  } = props

  return (
    <Layout>
      <Page {...shopifyPage} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageByShopifyId($shopifyId: String!) {
    shopifyPage(shopifyId: { eq: $shopifyId }) {
      body
      handle
      shopifyId
      title
    }
  }
`

export default PageTemplate

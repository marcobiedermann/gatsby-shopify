import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/Layout"

interface DataProps {
  shopifyArticle: {
    author: {
      name: string
    }
    contentHtml: string
    publishedAt: string
    title: string
  }
}

const ArticleTemplate: FC<PageProps<DataProps>> = props => {
  const { data } = props

  return (
    <Layout>
      <h1>{data.shopifyArticle.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.shopifyArticle.contentHtml }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleByShopifyId($shopifyId: String!) {
    shopifyArticle(shopifyId: { eq: $shopifyId }) {
      author {
        name
      }
      contentHtml
      publishedAt
      title
    }
  }
`

export default ArticleTemplate

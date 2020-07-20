import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Articles from "../../components/Articles"
import Layout from "../../components/Layout"

interface ShopifyArticle {
  node: {
    blog: {
      handle: string
    }
    handle: string
    shopifyId: string
    title: string
  }
}

interface DataProps {
  allShopifyArticle: {
    edges: ShopifyArticle[]
  }
  shopifyBlog: {
    title: string
  }
}

const BlogTemplate: FC<PageProps<DataProps>> = props => {
  const { data } = props

  return (
    <Layout>
      <h1>{data.shopifyBlog.title}</h1>

      <Articles
        articles={data.allShopifyArticle.edges.map(edge => edge.node)}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogByShopifyId($shopifyId: String!) {
    allShopifyArticle(filter: { blog: { shopifyId: { eq: $shopifyId } } }) {
      edges {
        node {
          blog {
            handle
          }
          handle
          shopifyId
          title
        }
      }
    }
    shopifyBlog(shopifyId: { eq: $shopifyId }) {
      title
    }
  }
`

export default BlogTemplate

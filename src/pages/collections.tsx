import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

interface ShopifyCollectionQuery {
  title: string
  shopifyId: string
  description: string
  handle: string
}

interface AllShopifyCollectionQuery {
  allShopifyCollection: {
    edges: {
      node: ShopifyCollectionQuery
    }[]
  }
}

const CollectionsPage = () => {
  const { allShopifyCollection } = useStaticQuery<
    AllShopifyCollectionQuery
  >(graphql`
    {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            description
            handle
            shopifyId
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Collections</h1>
      <ul>
        {allShopifyCollection.edges.map(({ node }) => {
          const { description, handle, title, shopifyId } = node

          return (
            <li key={shopifyId}>
              <h3>
                <Link to={`/collections/${handle}`}>{title}</Link>
              </h3>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default CollectionsPage

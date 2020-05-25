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
            title
            shopifyId
            description
            handle
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Collections</h1>
      <ul>
        {allShopifyCollection.edges.map(edge => (
          <li key={edge.node.shopifyId}>
            <h3>
              <Link to={`/collections/${edge.node.handle}`}>
                {edge.node.title}
              </Link>
            </h3>
            <p>{edge.node.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default CollectionsPage

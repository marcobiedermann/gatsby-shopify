import { graphql, Link, PageProps } from "gatsby"
import React, { FC } from "react"
import Collection from "../../components/Collection"
import Layout from "../../components/Layout"

interface Product {
  handle: string
  shopifyId: string
  title: string
}

interface DataProps {
  shopifyCollection: {
    description: string
    products: Product[]
    title: string
  }
}

const CollectionTemplate: FC<PageProps<DataProps>> = props => {
  const {
    data: { shopifyCollection },
  } = props

  return (
    <Layout>
      <Collection {...shopifyCollection} />
      <ul>
        {shopifyCollection.products.map(product => (
          <li key={product.shopifyId}>
            <h2>
              <Link to={`/products/${product.handle}`}>{product.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CollectionByShopifyId($shopifyId: String!) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      description
      products {
        handle
        shopifyId
        title
      }
      title
    }
  }
`

export default CollectionTemplate

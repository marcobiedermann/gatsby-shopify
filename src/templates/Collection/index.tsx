import { graphql, Link } from "gatsby"
import React, { FC } from "react"
import Collection, { CollectionProps } from "../../components/Collection"
import Layout from "../../components/Layout"
import { ProductProps } from "../../components/Product"

export interface CollectionTemplateProps {
  data: {
    shopifyCollection: {
      products: ProductProps[]
    }
  }
  pageContext: {
    collection: CollectionProps
  }
}

const CollectionTemplate: FC<CollectionTemplateProps> = props => {
  const { data, pageContext } = props
  const { shopifyCollection } = data
  const { collection } = pageContext

  return (
    <Layout>
      <Collection {...collection} />
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

export const collectionQuery = graphql`
  query ShopifyCollectionByTitle($title: String!) {
    shopifyCollection(title: { eq: $title }) {
      products {
        handle
        shopifyId
        title
      }
    }
  }
`

export default CollectionTemplate

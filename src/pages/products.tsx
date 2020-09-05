import { graphql, Link, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"

interface ShopifyProductQuery {
  title: string
  shopifyId: string
  description: string
  handle: string
  priceRange: {
    minVariantPrice: {
      amount: string
    }
  }
}

interface AllShopifyProductQuery {
  allShopifyProduct: {
    edges: {
      node: ShopifyProductQuery
    }[]
  }
}

const ProductsPage: FC<PageProps> = props => {
  const { location } = props
  const { allShopifyProduct } = useStaticQuery<AllShopifyProductQuery>(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            shopifyId
            description
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <h1>Products</h1>
      <ul>
        {allShopifyProduct.edges.map(edge => (
          <li key={edge.node.shopifyId}>
            <h3>
              <Link to={`/products/${edge.node.handle}`}>
                {edge.node.title}
              </Link>
              {" - "}${edge.node.priceRange.minVariantPrice.amount}
            </h3>
            <p>{edge.node.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ProductsPage

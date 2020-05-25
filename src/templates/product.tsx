import React, { FC } from "react"
import Layout from "../components/layout"

export interface ProductTemplateProps {
  pageContext: {
    product: {
      title: string
      description: string
    }
  }
}

const ProductTemplate: FC<ProductTemplateProps> = props => {
  const { pageContext } = props
  const { product } = pageContext

  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </Layout>
  )
}

export default ProductTemplate

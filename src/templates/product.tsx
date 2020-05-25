import React, { FC } from "react"
import Layout from "../components/Layout"
import Product, { ProductProps } from "../components/Product"

export interface ProductTemplateProps {
  pageContext: {
    product: ProductProps
  }
}

const ProductTemplate: FC<ProductTemplateProps> = props => {
  const { pageContext } = props
  const { product } = pageContext

  return (
    <Layout>
      <Product {...product} />
    </Layout>
  )
}

export default ProductTemplate

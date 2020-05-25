import React, { FC } from "react"
import Product, { ProductProps } from "../Product"

export interface ProductsProps {
  products: ProductProps[]
}

const Products: FC<ProductsProps> = props => {
  const { products } = props

  return (
    <ul>
      {products.map(product => (
        <li key={product.shopifyId}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  )
}

export default Products

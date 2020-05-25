import React, { FC } from "react"

export interface ProductProps {
  description: string
  shopifyId: string
  title: string
}

const Product: FC<ProductProps> = props => {
  const { description, title } = props

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Product

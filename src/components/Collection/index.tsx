import React, { FC } from "react"

interface Product {
  handle: string
  shopifyId: string
  title: string
}

export interface CollectionProps {
  description: string
  products: Product[]
  shopifyId: string
  title: string
}

const Collection: FC<CollectionProps> = props => {
  const { description, title } = props

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Collection

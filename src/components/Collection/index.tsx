import React, { FC } from "react"

export interface CollectionProps {
  description: string
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

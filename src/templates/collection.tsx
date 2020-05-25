import React, { FC } from "react"
import Layout from "../components/Layout"

export interface CollectionTemplateProps {
  pageContext: {
    collection: {
      title: string
      description: string
    }
  }
}

const CollectionTemplate: FC<CollectionTemplateProps> = props => {
  const { pageContext } = props
  const { collection } = pageContext

  return (
    <Layout>
      <h1>{collection.title}</h1>
      <div>{collection.description}</div>
    </Layout>
  )
}

export default CollectionTemplate

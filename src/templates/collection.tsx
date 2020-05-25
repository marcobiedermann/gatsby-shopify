import React, { FC } from "react"
import Collection from "../components/Collection"
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
      <Collection {...collection} />
    </Layout>
  )
}

export default CollectionTemplate

import React, { FC } from "react"
import Collection, { CollectionProps } from "../components/Collection"
import Layout from "../components/Layout"

export interface CollectionTemplateProps {
  pageContext: {
    collection: CollectionProps
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

import React, { FC } from "react"
import Tag from "../Tag"

export interface TagsProps {
  tags: string[]
}

const Tags: FC<TagsProps> = props => {
  const { tags } = props

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  )
}

export default Tags

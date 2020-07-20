import React, { FC } from "react"
import Article, { ArticleProps } from "../Article"

export interface ArticlesProps {
  articles: ArticleProps[]
}

const Articles: FC<ArticlesProps> = props => {
  const { articles } = props

  return (
    <ol>
      {articles.map(article => (
        <li key={article.shopifyId}>
          <Article {...article} />
        </li>
      ))}
    </ol>
  )
}

export default Articles

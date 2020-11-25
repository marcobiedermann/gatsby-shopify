import React, { FC } from 'react';
import Article, { ArticleProps } from '../Article';
import styles from './style.module.css';

export interface ArticlesProps {
  articles: ArticleProps[];
}

const Articles: FC<ArticlesProps> = (props) => {
  const { articles } = props;

  return (
    <ol className={styles.articles}>
      {articles.map((article) => (
        <li key={article.shopifyId}>
          <Article {...article} />
        </li>
      ))}
    </ol>
  );
};

export default Articles;

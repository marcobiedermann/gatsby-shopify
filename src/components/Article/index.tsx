import { Link } from 'gatsby';
import React, { FC } from 'react';

export interface ArticleProps {
  blog: {
    handle: string;
  };
  handle: string;
  shopifyId: string;
  title: string;
}

const Article: FC<ArticleProps> = (props) => {
  const { blog, handle, title } = props;

  return (
    <article>
      <h3>
        <Link to={`/blogs/${blog.handle}/${handle}`}>{title}</Link>
      </h3>
    </article>
  );
};

export default Article;

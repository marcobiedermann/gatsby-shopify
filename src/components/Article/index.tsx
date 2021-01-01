import { Link } from 'gatsby';
import React, { FC } from 'react';

export interface ArticleProps {
  blog: {
    handle: string;
  };
  excerptHtml: string;
  handle: string;
  shopifyId: string;
  title: string;
}

const Article: FC<ArticleProps> = (props) => {
  const { blog, handle, excerptHtml, title } = props;

  return (
    <article>
      <h3>
        <Link to={`/blogs/${blog.handle}/${handle}`}>{title}</Link>
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: excerptHtml,
        }}
      />
      <p>
        <Link to={`/blogs/${blog.handle}/${handle}`}>Read more</Link>
      </p>
    </article>
  );
};

export default Article;

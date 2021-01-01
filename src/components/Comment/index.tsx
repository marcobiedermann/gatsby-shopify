import React, { FC } from 'react';
import Author, { AuthorProps } from '../Author';

export interface CommentProps {
  author: AuthorProps;
  contentHtml: string;
  shopifyId: string;
}

const Comment: FC<CommentProps> = (props) => {
  const { contentHtml, author } = props;

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      />
      <Author {...author} />
    </div>
  );
};

export default Comment;

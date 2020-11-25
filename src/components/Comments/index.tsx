import React, { FC } from 'react';
import Comment, { CommentProps } from '../Comment';
import styles from './style.module.css';

export interface CommentsProps {
  comments: CommentProps[];
}

const Comments: FC<CommentsProps> = (props) => {
  const { comments } = props;

  return (
    <ol className={styles.comments}>
      {comments.map((comment) => (
        <li key={comment.shopifyId}>
          <Comment {...comment} />
        </li>
      ))}
    </ol>
  );
};

export default Comments;

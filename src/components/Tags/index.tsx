import React from 'react';
import Tag from '../Tag';
import * as styles from './style.module.css';

export interface TagsProps {
  tags: string[];
}

function Tags(props: TagsProps) {
  const { tags } = props;

  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}

export default Tags;

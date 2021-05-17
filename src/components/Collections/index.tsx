import React, { FC } from 'react';
import CollectionPreview, { CollectionPreviewProps } from '../CollectionPreview';
import * as styles from './style.module.css';

export interface CollectionsProps {
  collections: CollectionPreviewProps[];
}

const Collections: FC<CollectionsProps> = (props) => {
  const { collections } = props;

  return (
    <ul className={styles.collections}>
      <li>
        <div>
          <h1 className={styles.collections__title}>Collections</h1>
        </div>
      </li>
      {collections.map((collection) => (
        <li key={collection.shopifyId}>
          <CollectionPreview {...collection} />
        </li>
      ))}
    </ul>
  );
};

export default Collections;

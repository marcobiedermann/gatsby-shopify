import React from 'react';
import CollectionPreview, { CollectionPreviewProps } from '../CollectionPreview';
import * as styles from './style.module.css';

export interface CollectionsProps {
  collections: CollectionPreviewProps[];
}

function Collections(props: CollectionsProps) {
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
}

export default Collections;

import React, { FC } from 'react';
import Collection, { CollectionProps } from '../Collection';

export interface CollectionsProps {
  collections: CollectionProps[];
}

const Collections: FC<CollectionsProps> = (props) => {
  const { collections } = props;

  return (
    <ul>
      {collections.map((collection) => (
        <li key={collection.shopifyId}>
          <Collection {...collection} />
        </li>
      ))}
    </ul>
  );
};

export default Collections;

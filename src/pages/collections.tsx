import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Collections from '../components/Collections';
import Grid from '../components/Grid';
import { useAllShopifyCollection } from '../hooks/collection';

const CollectionsPage: FC<PageProps> = () => {
  const { allShopifyCollection } = useAllShopifyCollection();

  return (
    <>
      <Grid isFull>
        <Collections
          collections={allShopifyCollection.edges.map((collection) => collection.node)}
        />
      </Grid>
    </>
  );
};

export default CollectionsPage;

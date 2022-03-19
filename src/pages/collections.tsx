import { PageProps } from 'gatsby';
import React from 'react';
import Collections from '../components/Collections';
import Grid from '../components/Grid';
import { useAllShopifyCollection } from '../hooks/collection';

interface CollectionsPageProps extends PageProps {}

function CollectionsPage(_props: CollectionsPageProps) {
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
}

export default CollectionsPage;

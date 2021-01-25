import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Collections from '../components/Collections';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import { useAllShopifyCollection } from '../hooks/collection';

const CollectionsPage: FC<PageProps> = (props) => {
  const { location } = props;
  const { allShopifyCollection } = useAllShopifyCollection();

  return (
    <Layout location={location}>
      <Grid isFull>
        <Collections
          collections={allShopifyCollection.edges.map((collection) => collection.node)}
        />
      </Grid>
    </Layout>
  );
};

export default CollectionsPage;

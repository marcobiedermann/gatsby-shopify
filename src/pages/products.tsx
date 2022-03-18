import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { useAllShopifyProduct } from '../hooks/product';

const ProductsPage: FC<PageProps> = () => {
  const { allShopifyProduct } = useAllShopifyProduct();

  return (
    <Layout>
      <Grid isFull>
        <Products products={allShopifyProduct.edges.map((edge) => edge.node)} />
      </Grid>
    </Layout>
  );
};

export default ProductsPage;

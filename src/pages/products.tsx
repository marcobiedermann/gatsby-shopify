import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { useAllShopifyProduct } from '../hooks/product';

const ProductsPage: FC<PageProps> = (props) => {
  const { location } = props;
  const { allShopifyProduct } = useAllShopifyProduct();

  return (
    <Layout location={location}>
      <Grid>
        <h1>Products</h1>
        <Products products={allShopifyProduct.edges.map((edge) => edge.node)} />
      </Grid>
    </Layout>
  );
};

export default ProductsPage;

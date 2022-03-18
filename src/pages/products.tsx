import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Products from '../components/Products';
import { useAllShopifyProduct } from '../hooks/product';

const ProductsPage: FC<PageProps> = () => {
  const { allShopifyProduct } = useAllShopifyProduct();

  return (
    <>
      <Grid isFull>
        <Products products={allShopifyProduct.edges.map((edge) => edge.node)} />
      </Grid>
    </>
  );
};

export default ProductsPage;

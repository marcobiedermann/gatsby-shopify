import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Products from '../components/Products';
import { useAllShopifyProduct } from '../hooks/product';

interface ProductsPageProps extends PageProps {}

function ProductsPage(_props: ProductsPageProps) {
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

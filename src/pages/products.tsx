import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Image from '../components/Image';
import Layout from '../components/Layout';
import Products from '../components/Products';

interface Image {
  originalSrc: string;
}

interface PriceRange {
  minVariantPrice: VariantPrice;
}

interface ShopifyProductQuery {
  handle: string;
  images: Image[];
  priceRange: PriceRange;
  shopifyId: string;
  title: string;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface AllShopifyProductQuery {
  allShopifyProduct: {
    edges: {
      node: ShopifyProductQuery;
    }[];
  };
}

const ProductsPage: FC<PageProps> = (props) => {
  const { location } = props;
  const { allShopifyProduct } = useStaticQuery<AllShopifyProductQuery>(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
            images {
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            shopifyId
            title
          }
        }
      }
    }
  `);

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

import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Product from '../../components/Product';

interface Image {
  id: string;
  originalSrc: string;
}

interface Option {
  name: string;
  shopifyId: string;
  values: string[];
}

export interface DataProps {
  shopifyProduct: {
    availableForSale: boolean;
    description: string;
    handle: string;
    images: Image[];
    options: Option[];
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    shopifyId: string;
    tags: string[];
    title: string;
    vendor: string;
  };
}

const ProductPage: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyProduct },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Grid>
        <Product {...shopifyProduct} />
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    shopifyProduct(id: { eq: $id }) {
      availableForSale
      description
      handle
      images {
        id
        originalSrc
      }
      options {
        shopifyId
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      shopifyId
      tags
      title
      vendor
    }
  }
`;

export default ProductPage;

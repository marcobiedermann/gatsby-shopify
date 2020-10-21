import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
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
      };
      maxVariantPrice: {
        amount: string;
      };
    };
    shopifyId: string;
    tags: string[];
    title: string;
  };
}

const ProductTemplate: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyProduct },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Product {...shopifyProduct} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProductByShopifyId($shopifyId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
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
        }
        maxVariantPrice {
          amount
        }
      }
      shopifyId
      tags
      title
    }
  }
`;

export default ProductTemplate;

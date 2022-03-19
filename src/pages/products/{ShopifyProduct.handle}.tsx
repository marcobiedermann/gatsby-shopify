import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Product from '../../components/Product';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface Image {
  altText: string;
  gatsbyImageData: {
    images: {
      sources: Source[];
      fallback: {
        src: string;
        srcSet: string;
        sizes: string;
      };
    };
    layout: Layout;
    width: number;
    height: number;
  };
  id: string;
}

interface Option {
  name: string;
  id: string;
  values: string[];
}

export interface DataProps {
  shopifyProduct: {
    description: string;
    handle: string;
    images: Image[];
    options: Option[];
    priceRangeV2: {
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

interface ProductPageProps extends PageProps<DataProps> {}

function ProductPage(props: ProductPageProps) {
  const {
    data: { shopifyProduct },
  } = props;

  return (
    <>
      <Grid>
        <Product {...shopifyProduct} />
      </Grid>
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    shopifyProduct(id: { eq: $id }) {
      description
      handle
      images {
        altText
        gatsbyImageData
        id
      }
      options {
        id
        name
        values
      }
      priceRangeV2 {
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

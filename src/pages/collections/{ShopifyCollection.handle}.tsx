import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Collection from '../../components/Collection';
import Grid from '../../components/Grid';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface FeaturedImage {
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
}

interface PriceRangeV2 {
  minVariantPrice: VariantPrice;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface Product {
  handle: string;
  featuredImage: FeaturedImage;
  priceRangeV2: PriceRangeV2;
  shopifyId: string;
  title: string;
}

interface DataProps {
  shopifyCollection: {
    description: string;
    products: Product[];
    shopifyId: string;
    title: string;
  };
}

interface CollectionPageProps extends PageProps<DataProps> {}

function CollectionPage(props: CollectionPageProps) {
  const {
    data: { shopifyCollection },
  } = props;

  return (
    <>
      <Grid isFull>
        <Collection {...shopifyCollection} />
      </Grid>
    </>
  );
};

export const query = graphql`
  query ($id: String!) {
    shopifyCollection(id: { eq: $id }) {
      description
      products {
        handle
        featuredImage {
          altText
          gatsbyImageData
        }
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        shopifyId
        title
      }
      shopifyId
      title
    }
  }
`;

export default CollectionPage;

import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Collection from '../../components/Collection';
import Grid from '../../components/Grid';

interface Image {
  originalSrc: string;
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
  featuredImage: Image;
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

const CollectionPage: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyCollection },
    location,
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
          originalSrc
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

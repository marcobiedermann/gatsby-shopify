import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Collection from '../../components/Collection';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';

interface Image {
  originalSrc: string;
}

interface PriceRange {
  minVariantPrice: VariantPrice;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface Product {
  handle: string;
  images: Image[];
  priceRange: PriceRange;
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
    <Layout location={location}>
      <Grid isFull>
        <Collection {...shopifyCollection} />
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    shopifyCollection(id: { eq: $id }) {
      description
      products {
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
      shopifyId
      title
    }
  }
`;

export default CollectionPage;

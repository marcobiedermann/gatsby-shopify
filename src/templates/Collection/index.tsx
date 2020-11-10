import { graphql, Link, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Collection from '../../components/Collection';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';

interface Product {
  handle: string;
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

const CollectionTemplate: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyCollection },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Grid>
        <Collection {...shopifyCollection} />
        <ul>
          {shopifyCollection.products.map((product) => (
            <li key={product.shopifyId}>
              <h2>
                <Link to={`/products/${product.handle}`}>{product.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CollectionByShopifyId($shopifyId: String!) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      description
      products {
        handle
        shopifyId
        title
      }
      shopifyId
      title
    }
  }
`;

export default CollectionTemplate;

import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

export interface DataProps {
  shopifyShopPolicy: {
    body: string;
    handle: string;
    shopifyId: string;
    title: string;
  };
}

const Policy: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyShopPolicy },
    location,
  } = props;

  console.log({ props });

  return (
    <Layout location={location}>
      <Grid>
        <Page {...shopifyShopPolicy} />
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    shopifyShopPolicy(id: { eq: $id }) {
      body
      handle
      shopifyId
      title
    }
  }
`;

export default Policy;

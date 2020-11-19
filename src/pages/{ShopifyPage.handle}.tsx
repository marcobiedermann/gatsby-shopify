import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Page from '../components/Page';

export interface DataProps {
  shopifyPage: {
    body: string;
    handle: string;
    shopifyId: string;
    title: string;
  };
}

const DefaultPage: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyPage },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Grid>
        <Page {...shopifyPage} />
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    shopifyPage(id: { eq: $id }) {
      body
      handle
      shopifyId
      title
    }
  }
`;

export default DefaultPage;

import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Articles from '../../components/Articles';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';

interface ShopifyArticle {
  node: {
    blog: {
      handle: string;
    };
    handle: string;
    shopifyId: string;
    title: string;
  };
}

interface DataProps {
  allShopifyArticle: {
    edges: ShopifyArticle[];
  };
  shopifyBlog: {
    title: string;
  };
}

const BlogTemplate: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { allShopifyArticle, shopifyBlog },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Grid>
        <h1>{shopifyBlog.title}</h1>

        <Articles articles={allShopifyArticle.edges.map((edge) => edge.node)} />
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogByShopifyId($shopifyId: String!) {
    allShopifyArticle(filter: { blog: { shopifyId: { eq: $shopifyId } } }) {
      edges {
        node {
          blog {
            handle
          }
          handle
          shopifyId
          title
        }
      }
    }
    shopifyBlog(shopifyId: { eq: $shopifyId }) {
      title
    }
  }
`;

export default BlogTemplate;

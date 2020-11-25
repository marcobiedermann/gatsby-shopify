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
    excerptHtml: string;
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

const BlogPage: FC<PageProps<DataProps>> = (props) => {
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

export const query = graphql`
  query($id: String!) {
    allShopifyArticle(filter: { blog: { id: { eq: $id } } }) {
      edges {
        node {
          blog {
            handle
          }
          excerptHtml
          handle
          shopifyId
          title
        }
      }
    }
    shopifyBlog(id: { eq: $id }) {
      title
    }
  }
`;

export default BlogPage;

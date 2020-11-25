import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Comments from '../../../components/Comments';
import Grid from '../../../components/Grid';
import Layout from '../../../components/Layout';

interface Author {
  name: string;
}

interface Comment {
  author: Author;
  contentHtml: string;
  shopifyId: string;
}

interface DataProps {
  shopifyArticle: {
    author: {
      name: string;
    };
    comments: Comment[];
    contentHtml: string;
    publishedAt: string;
    title: string;
  };
}

const ArticlePage: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { shopifyArticle },
    location,
  } = props;

  return (
    <Layout location={location}>
      <Grid>
        <article>
          <header>
            <h1>{shopifyArticle.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: shopifyArticle.contentHtml }} />
          <h2>{shopifyArticle.comments.length} Comment</h2>
          <Comments comments={shopifyArticle.comments} />
        </article>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    shopifyArticle(id: { eq: $id }) {
      author {
        name
      }
      comments {
        author {
          name
        }
        contentHtml
        shopifyId
      }
      contentHtml
      publishedAt
      title
    }
  }
`;

export default ArticlePage;

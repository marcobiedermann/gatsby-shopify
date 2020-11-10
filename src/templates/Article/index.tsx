import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';

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

const ArticleTemplate: FC<PageProps<DataProps>> = (props) => {
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
          <ol>
            {shopifyArticle.comments.map((comment) => (
              <li key={comment.shopifyId}>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: comment.contentHtml }} />
                  <div>
                    <span>{comment.author.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArticleByShopifyId($shopifyId: String!) {
    shopifyArticle(shopifyId: { eq: $shopifyId }) {
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

export default ArticleTemplate;

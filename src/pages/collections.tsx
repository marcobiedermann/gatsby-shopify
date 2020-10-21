import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import Image from '../components/Image';
import Layout from '../components/Layout';

interface ShopifyCollectionQuery {
  description: string;
  handle: string;
  image: {
    src: string;
  };
  shopifyId: string;
  title: string;
}

interface AllShopifyCollectionQuery {
  allShopifyCollection: {
    edges: {
      node: ShopifyCollectionQuery;
    }[];
  };
}

const CollectionsPage: FC<PageProps> = (props) => {
  const { location } = props;
  const { allShopifyCollection } = useStaticQuery<AllShopifyCollectionQuery>(graphql`
    {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            description
            handle
            image {
              src
            }
            shopifyId
            title
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <h1>Collections</h1>
      <ul>
        {allShopifyCollection.edges.map(({ node }) => {
          const { description, handle, image, title, shopifyId } = node;

          return (
            <li key={shopifyId}>
              <h3>
                <Link to={`/collections/${handle}`}>{title}</Link>
              </h3>
              <Image src={image.src} alt={title} />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default CollectionsPage;

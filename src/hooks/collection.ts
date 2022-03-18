import { graphql, useStaticQuery } from 'gatsby';

interface Image {
  originalSrc: string;
}

interface ShopifyCollectionQuery {
  description: string;
  handle: string;
  image: Image;
  shopifyId: string;
  title: string;
}

interface Edge {
  node: ShopifyCollectionQuery;
}

interface AllShopifyCollectionQuery {
  allShopifyCollection: {
    edges: Edge[];
  };
}

export function useAllShopifyCollection() {
  return useStaticQuery<AllShopifyCollectionQuery>(graphql`
    {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            description
            handle
            image {
              originalSrc
            }
            shopifyId
            title
          }
        }
      }
    }
  `);
}

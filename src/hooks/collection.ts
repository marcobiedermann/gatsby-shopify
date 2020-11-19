import { graphql, useStaticQuery } from 'gatsby';

interface Image {
  src: string;
}

interface ShopifyCollectionQuery {
  description: string;
  handle: string;
  image: Image;
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

export function useAllShopifyCollection() {
  return useStaticQuery<AllShopifyCollectionQuery>(graphql`
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
}

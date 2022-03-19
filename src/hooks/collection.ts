import { graphql, useStaticQuery } from 'gatsby';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface Image {
  altText: string;
  gatsbyImageData: {
    images: {
      sources: Source[];
      fallback: {
        src: string;
        srcSet: string;
        sizes: string;
      };
    };
    layout: Layout;
    width: number;
    height: number;
  };
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

function useAllShopifyCollection() {
  return useStaticQuery<AllShopifyCollectionQuery>(graphql`
    {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            description
            handle
            image {
              altText
              gatsbyImageData
            }
            shopifyId
            title
          }
        }
      }
    }
  `);
}

export { useAllShopifyCollection };

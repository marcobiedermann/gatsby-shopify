import { graphql, useStaticQuery } from 'gatsby';

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface PriceRangeV2 {
  minVariantPrice: VariantPrice;
}

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface FeaturedImage {
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

interface ShopifyProductQuery {
  handle: string;
  featuredImage: FeaturedImage;
  priceRangeV2: PriceRangeV2;
  shopifyId: string;
  title: string;
}

interface Edge {
  node: ShopifyProductQuery;
}

interface AllShopifyProductQuery {
  allShopifyProduct: {
    edges: Edge[];
  };
}

export function useAllShopifyProduct() {
  return useStaticQuery<AllShopifyProductQuery>(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
            featuredImage {
              altText
              gatsbyImageData
            }
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            shopifyId
            title
          }
        }
      }
    }
  `);
}

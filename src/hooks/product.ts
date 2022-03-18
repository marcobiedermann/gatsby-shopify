import { graphql, useStaticQuery } from 'gatsby';

interface Image {
  originalSrc: string;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface PriceRangeV2 {
  minVariantPrice: VariantPrice;
}

interface ShopifyProductQuery {
  handle: string;
  featuredImage: Image;
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
              originalSrc
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

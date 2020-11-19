import { graphql, useStaticQuery } from 'gatsby';

interface Image {
  originalSrc: string;
}

interface PriceRange {
  minVariantPrice: VariantPrice;
}

interface ShopifyProductQuery {
  handle: string;
  images: Image[];
  priceRange: PriceRange;
  shopifyId: string;
  title: string;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface AllShopifyProductQuery {
  allShopifyProduct: {
    edges: {
      node: ShopifyProductQuery;
    }[];
  };
}

export function useAllShopifyProduct() {
  return useStaticQuery<AllShopifyProductQuery>(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
            images {
              originalSrc
            }
            priceRange {
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

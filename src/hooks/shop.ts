import { graphql, useStaticQuery } from 'gatsby';

interface ShopifyShopQuery {
  shopifyShop: {
    name: string;
  };
}

export function useShopifyShop() {
  return useStaticQuery<ShopifyShopQuery>(graphql`
    {
      shopifyShop {
        name
      }
    }
  `);
}

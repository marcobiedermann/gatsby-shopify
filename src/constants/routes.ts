export interface Route {
  name: string;
  path: string;
}

export const COLLECTIONS: Route = {
  name: 'Collections',
  path: '/collections',
};

export const PRODUCTS: Route = {
  name: 'Products',
  path: '/products',
};

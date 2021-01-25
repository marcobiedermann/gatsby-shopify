export interface Route {
  name: string;
  path: string;
}

export const COLLECTIONS: Route = {
  name: 'Collections',
  path: '/collections',
};

export const NEWS: Route = {
  name: 'News',
  path: '/blogs/news',
};

export const PRODUCTS: Route = {
  name: 'Products',
  path: '/products',
};

export const PRIVACY_POLICY: Route = {
  name: 'Privacy Policy',
  path: '/policies/privacy-policy',
};

export const REFUND_POLICY: Route = {
  name: 'Refund Policy',
  path: '/policies/refund-policy',
};

export const TERMS_OF_SERVICE: Route = {
  name: 'Terms of Service',
  path: '/policies/terms-of-service',
};

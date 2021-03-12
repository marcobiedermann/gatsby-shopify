import { ProductProps } from '..';

const product: ProductProps = {
  availableForSale: true,
  description: 'Product Description',
  handle: 'product-handle',
  images: [
    {
      id: '12345678-9012-3456-7890-123456789012',
      originalSrc: '/path/to/image.jpg',
    },
  ],
  options: [
    {
      name: 'Size',
      shopifyId: '12345678-9012-3456-7890-123456789012',
      values: ['s', 'm', 'l'],
    },
  ],
  priceRange: {
    minVariantPrice: {
      amount: '100',
      currencyCode: 'EUR',
    },
    maxVariantPrice: {
      amount: '100',
      currencyCode: 'EUR',
    },
  },
  shopifyId: '12345678-9012-3456-7890-123456789012',
  tags: ['tag'],
  title: 'Product Title',
  vendor: 'Vendor',
};

export default product;

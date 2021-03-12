import { ProductPreviewProps } from '..';

const productPreview: ProductPreviewProps = {
  handle: 'product',
  images: [
    {
      originalSrc: '/path/to/image.jpg',
    },
  ],
  priceRange: {
    minVariantPrice: {
      amount: '100',
      currencyCode: 'EUR',
    },
  },
  shopifyId: '12345678-9012-3456-7890-123456789012',
  title: 'Product Title',
};

export default productPreview;

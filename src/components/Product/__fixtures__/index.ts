import { ProductProps } from '..';

const product: ProductProps = {
  description: 'Product Description',
  handle: 'product-handle',
  images: [
    {
      altText: '',
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_159x140_crop_center.jpg.webp?v=1590345972 159w,\nhttps://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_318x280_crop_center.jpg.webp?v=1590345972 318w,\nhttps://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_635x560_crop_center.jpg.webp?v=1590345972 635w',
              sizes: '(min-width: 635px) 635px, 100vw',
              type: 'image/webp',
            },
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_635x560_crop_center.jpg?v=1590345972',
            srcSet:
              'https://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_159x140_crop_center.jpg?v=1590345972 159w,\nhttps://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_318x280_crop_center.jpg?v=1590345972 318w,\nhttps://cdn.shopify.com/s/files/1/1776/8987/products/9f190cba7218c819c81566bca6298c6a_635x560_crop_center.jpg?v=1590345972 635w',
            sizes: '(min-width: 635px) 635px, 100vw',
          },
        },
        layout: 'constrained',
        width: 635,
        height: 560,
      },
      id: '12345678-9012-3456-7890-123456789012',
    },
  ],
  options: [
    {
      name: 'Size',
      id: '12345678-9012-3456-7890-123456789012',
      values: ['s', 'm', 'l'],
    },
  ],
  priceRangeV2: {
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

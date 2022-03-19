import React from 'react';
import ProductPreview, { ProductPreviewProps } from '../ProductPreview';
import * as styles from './style.module.css';

export interface ProductsProps {
  products: ProductPreviewProps[];
}

function Products(props: ProductsProps) {
  const { products } = props;

  return (
    <ul className={styles.products}>
      <li>
        <div>
          <h1 className={styles.products__title}>Products</h1>
        </div>
      </li>
      {products.map((product) => (
        <li key={product.shopifyId}>
          <ProductPreview {...product} />
        </li>
      ))}
    </ul>
  );
}

export default Products;

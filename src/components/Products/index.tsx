import React, { FC } from 'react';
import ProductPreview, { ProductPreviewProps } from '../ProductPreview';
import styles from './style.module.css';

export interface ProductsProps {
  products: ProductPreviewProps[];
}

const Products: FC<ProductsProps> = (props) => {
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
};

export default Products;

import React, { FC } from 'react';
import ProductPreview, { ProductPreviewProps } from '../ProductPreview';
import styles from './style.module.css';

export interface CollectionProps {
  description: string;
  products: ProductPreviewProps[];
  shopifyId: string;
  title: string;
}

const Collection: FC<CollectionProps> = (props) => {
  const { description, products, title } = props;

  return (
    <ul className={styles.collection}>
      <li>
        <div>
          <h1 className={styles.collection__title}>{title}</h1>
          <p>{description}</p>
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

export default Collection;

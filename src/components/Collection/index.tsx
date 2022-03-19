import React from 'react';
import ProductPreview, { ProductPreviewProps } from '../ProductPreview';
import { collection, collection__title } from './style.module.css';

export interface CollectionProps {
  description: string;
  products: ProductPreviewProps[];
  shopifyId: string;
  title: string;
}

function Collection(props: CollectionProps) {
  const { description, products, title } = props;

  return (
    <ul className={collection}>
      <li>
        <div>
          <h1 className={collection__title}>{title}</h1>
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
}

export default Collection;

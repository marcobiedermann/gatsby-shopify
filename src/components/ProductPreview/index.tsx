import { Link } from 'gatsby';
import React, { FC } from 'react';
import Image from '../Image';
import styles from './style.module.css';

interface Image {
  originalSrc: string;
}

interface PriceRange {
  minVariantPrice: VariantPrice;
}

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

export interface ProductPreviewProps {
  handle: string;
  images: Image[];
  priceRange: PriceRange;
  shopifyId: string;
  title: string;
}

const ProductPreview: FC<ProductPreviewProps> = (props) => {
  const { handle, images, title, priceRange } = props;

  return (
    <div className={styles.productPreview}>
      <figure>
        <Link to={`/products/${handle}`}>
          <Image src={images[0].originalSrc} alt={title} />
        </Link>
      </figure>
      <h3>
        <Link to={`/products/${handle}`}>{title}</Link>
      </h3>
      <p>
        {priceRange.minVariantPrice.amount} {priceRange.minVariantPrice.currencyCode}
      </p>
    </div>
  );
};

export default ProductPreview;

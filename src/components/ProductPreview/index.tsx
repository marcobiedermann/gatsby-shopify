import { Link } from 'gatsby';
import React, { FC } from 'react';
import Image from '../Image';
import * as styles from './style.module.css';

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface PriceRangeV2 {
  minVariantPrice: VariantPrice;
}

interface Image {
  originalSrc: string;
}

export interface ProductPreviewProps {
  handle: string;
  featuredImage: Image;
  priceRangeV2: PriceRangeV2;
  shopifyId: string;
  title: string;
}

const ProductPreview: FC<ProductPreviewProps> = (props) => {
  const { handle, featuredImage, title, priceRangeV2 } = props;

  return (
    <div className={styles.productPreview}>
      <figure>
        <Link to={`/products/${handle}`}>
          <Image src={featuredImage.originalSrc} alt={title} />
        </Link>
      </figure>
      <h3>
        <Link to={`/products/${handle}`}>{title}</Link>
      </h3>
      <p>
        {priceRangeV2.minVariantPrice.amount} {priceRangeV2.minVariantPrice.currencyCode}
      </p>
    </div>
  );
};

export default ProductPreview;

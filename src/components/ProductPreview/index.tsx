import { Link } from 'gatsby';
import React, { FC } from 'react';
import Image from '../Image';
import { productPreview } from './style.module.css';

interface VariantPrice {
  amount: string;
  currencyCode: string;
}

interface PriceRangeV2 {
  minVariantPrice: VariantPrice;
}

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface FeaturedImage {
  altText: string;
  gatsbyImageData: {
    images: {
      sources: Source[];
      fallback: {
        src: string;
        srcSet: string;
        sizes: string;
      };
    };
    layout: Layout;
    width: number;
    height: number;
  };
}

export interface ProductPreviewProps {
  handle: string;
  featuredImage: FeaturedImage;
  priceRangeV2: PriceRangeV2;
  shopifyId: string;
  title: string;
}

const ProductPreview: FC<ProductPreviewProps> = (props) => {
  const { handle, featuredImage, title, priceRangeV2 } = props;

  return (
    <div className={productPreview}>
      <figure>
        <Link to={`/products/${handle}`}>
          <Image {...featuredImage} />
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

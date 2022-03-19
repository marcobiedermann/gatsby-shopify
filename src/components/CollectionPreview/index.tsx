import { Link } from 'gatsby';
import React, { FC } from 'react';
import Image from '../Image';
import * as styles from './style.module.css';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

interface Image {
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

export interface CollectionPreviewProps {
  handle: string;
  image: Image;
  shopifyId: string;
  title: string;
}

const CollectionPreview: FC<CollectionPreviewProps> = (props) => {
  const { handle, image, title } = props;

  return (
    <div className={styles.collectionPreview}>
      <figure>
        <Link to={`/collections/${handle}`}>
          <Image {...image} />
        </Link>
      </figure>
      <h3>
        <Link to={`/collections/${handle}`}>{title}</Link>
      </h3>
    </div>
  );
};

export default CollectionPreview;

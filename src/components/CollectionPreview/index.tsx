import { Link } from 'gatsby';
import React from 'react';
import Image from '../Image';
import { collectionPreview } from './style.module.css';

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

function CollectionPreview(props: CollectionPreviewProps) {
  const { handle, image, title } = props;

  return (
    <div className={collectionPreview}>
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
}

export default CollectionPreview;

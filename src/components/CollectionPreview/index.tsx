import { Link } from 'gatsby';
import React, { FC } from 'react';
import Image from '../Image';
import styles from './style.module.css';

interface Image {
  src: string;
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
          <Image src={image.src} alt={title} />
        </Link>
      </figure>
      <h3>
        <Link to={`/collections/${handle}`}>{title}</Link>
      </h3>
    </div>
  );
};

export default CollectionPreview;

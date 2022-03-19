import { GatsbyImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

interface Source {
  srcSet: string;
  sizes: string;
  type: string;
}

type Layout = 'fixed' | 'fullWidth' | 'constrained';

export interface ImageProps {
  altText: string;
  className?: string;
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
  id?: string;
}

const Image: FC<ImageProps> = (props) => {
  const { altText, gatsbyImageData, ...otherProps } = props;

  return <GatsbyImage image={gatsbyImageData} alt={altText} {...otherProps} />;
};

export default Image;

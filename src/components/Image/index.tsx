import React, { FC, ImgHTMLAttributes } from 'react';

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img {...props} />;
};

export default Image;

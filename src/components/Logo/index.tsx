import { Link } from 'gatsby';
import React, { FC } from 'react';

const Logo: FC = (props) => {
  return <Link to="/" {...props} />;
};

export default Logo;

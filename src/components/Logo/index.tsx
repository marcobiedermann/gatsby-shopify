import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

export interface LogoProps {
  children: ReactNode;
}

function Logo(props: LogoProps) {
  return <Link to="/" {...props} />;
};

export default Logo;

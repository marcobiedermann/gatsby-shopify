import React, { ReactNode } from 'react';
import { footer } from './style.module.css';

export interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps) {
  return <footer className={footer} {...props} />;
}

export default Footer;

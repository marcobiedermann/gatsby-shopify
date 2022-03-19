import React, { ReactNode } from 'react';
import * as styles from './style.module.css';

export interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps) {
  return <footer className={styles.footer} {...props} />;
}

export default Footer;

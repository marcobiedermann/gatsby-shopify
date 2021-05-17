import React, { FC } from 'react';
import * as styles from './style.module.css';

const Footer: FC = (props) => {
  return <footer className={styles.footer} {...props} />;
};

export default Footer;

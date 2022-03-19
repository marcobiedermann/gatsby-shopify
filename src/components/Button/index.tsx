import React, { ButtonHTMLAttributes } from 'react';
import * as styles from './style.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}

export default Button;

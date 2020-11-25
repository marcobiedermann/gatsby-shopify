import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './style.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};

export default Button;

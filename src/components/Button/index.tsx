import React, { ButtonHTMLAttributes } from 'react';
import { button } from './style.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <button className={button} {...props} />;
}

export default Button;

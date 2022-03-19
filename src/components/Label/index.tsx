import React, { LabelHTMLAttributes } from 'react';
import { label } from './style.module.css';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label(props: LabelProps) {
  return <label className={label} {...props} />;
}

export default Label;

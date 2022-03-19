import React, { LabelHTMLAttributes } from 'react';
import * as styles from './style.module.css';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label(props: LabelProps) {
  return <label className={styles.label} {...props} />;
}

export default Label;

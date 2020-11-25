import React, { FC, LabelHTMLAttributes } from 'react';
import styles from './style.module.css';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label: FC<LabelProps> = (props) => {
  return <label className={styles.label} {...props} />;
};

export default Label;

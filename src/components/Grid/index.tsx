import clsx from 'clsx';
import React, { ReactNode } from 'react';
import * as styles from './style.module.css';

export interface GridProps {
  children: ReactNode;
  isFull?: boolean;
}

function Grid(props: GridProps) {
  const { isFull, ...otherProps } = props;

  return (
    <div
      className={clsx(styles.grid, {
        [styles.gridFull]: isFull,
      })}
      {...otherProps}
    />
  );
}

export default Grid;

import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { grid, gridFull } from './style.module.css';

export interface GridProps {
  children: ReactNode;
  isFull?: boolean;
}

function Grid(props: GridProps) {
  const { isFull, ...otherProps } = props;

  return (
    <div
      className={clsx(grid, {
        [gridFull]: isFull,
      })}
      {...otherProps}
    />
  );
}

export default Grid;

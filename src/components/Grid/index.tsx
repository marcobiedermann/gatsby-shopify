import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface GridProps {
  isFull?: boolean;
}

const Grid: FC<GridProps> = (props) => {
  const { isFull, ...otherProps } = props;

  return (
    <div
      className={classNames(styles.grid, {
        [styles.gridFull]: isFull,
      })}
      {...otherProps}
    />
  );
};

export default Grid;

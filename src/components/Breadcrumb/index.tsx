import { Link } from 'gatsby';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbProps {
  breadcrumbItems: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { breadcrumbItems } = props;

  return (
    <ol className={styles.breadcrumb}>
      {breadcrumbItems.map((breadcrumbItem) => (
        <li className={styles.breadcrumb__item} key={breadcrumbItem.path}>
          <Link to={breadcrumbItem.path}>{breadcrumbItem.name}</Link>
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;

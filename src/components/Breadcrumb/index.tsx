import { Link } from 'gatsby';
import React from 'react';
import * as styles from './style.module.css';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbProps {
  breadcrumbItems: BreadcrumbItem[];
}

function Breadcrumb(props: BreadcrumbProps) {
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

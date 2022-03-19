import { Link } from 'gatsby';
import React from 'react';
import { breadcrumb, breadcrumb__item } from './style.module.css';

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
    <ol className={breadcrumb}>
      {breadcrumbItems.map((breadcrumbItem) => (
        <li className={breadcrumb__item} key={breadcrumbItem.path}>
          <Link to={breadcrumbItem.path}>{breadcrumbItem.name}</Link>
        </li>
      ))}
    </ol>
  );
}

export default Breadcrumb;

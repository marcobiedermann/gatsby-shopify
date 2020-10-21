import { Link } from 'gatsby';
import React, { FC } from 'react';

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
    <nav>
      <ul>
        {breadcrumbItems.map((breadcrumbItem) => (
          <li key={breadcrumbItem.path}>
            <Link to={breadcrumbItem.path}>{breadcrumbItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

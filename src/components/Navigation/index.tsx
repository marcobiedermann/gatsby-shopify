import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { Route } from '../../constants/routes';
import * as styles from './style.module.css';

export interface NavigationProps {
  inline?: boolean;
  routes: Route[];
}

function Navigation(props: NavigationProps) {
  const { inline, routes } = props;

  return (
    <nav className={styles.navigation}>
      <ul
        className={clsx(styles.navigation__list, {
          [styles.navigation__listInline]: inline,
        })}
      >
        {routes.map((route) => (
          <li key={route.path}>
            <Link className={styles.navigation__link} to={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

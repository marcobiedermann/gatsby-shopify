import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Route } from '../../constants/routes';
import styles from './style.module.css';

export interface NavigationProps {
  inline?: boolean;
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props) => {
  const { inline, routes } = props;

  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(styles.navigation__list, {
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
};

export default Navigation;

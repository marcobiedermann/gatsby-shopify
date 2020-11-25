import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Route } from '../../constants/routes';
import styles from './style.module.css';

export interface NavigationProps {
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props) => {
  const { routes } = props;

  return (
    <nav>
      <ul className={styles.navigation__list}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

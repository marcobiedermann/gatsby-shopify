import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { Route } from '../../constants/routes';
import {
  navigation,
  navigation__link,
  navigation__list,
  navigation__listInline,
} from './style.module.css';

export interface NavigationProps {
  inline?: boolean;
  routes: Route[];
}

function Navigation(props: NavigationProps) {
  const { inline, routes } = props;

  return (
    <nav className={navigation}>
      <ul
        className={clsx(navigation__list, {
          [navigation__listInline]: inline,
        })}
      >
        {routes.map((route) => (
          <li key={route.path}>
            <Link className={navigation__link} to={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

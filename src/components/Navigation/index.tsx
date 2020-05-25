import { Link } from "gatsby"
import React, { FC } from "react"
import { Route } from "../../constants/routes"

export interface NavigationProps {
  routes: Route[]
}

const Navigation: FC<NavigationProps> = props => {
  const { routes } = props

  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

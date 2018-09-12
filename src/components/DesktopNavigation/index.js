import React from 'react'
import Link from 'gatsby-link'
import { MainMenu } from '../../helpers/MainMenu'

const DesktopNavigation = () => (
  <ul className="list-reset hidden md:block">
    {MainMenu.map((item, i) => (
      <li key={i} className="inline-block">
        <Link
          to={item.route}
          className="text-black text-base no-underline hover:underline p-1 ml-3 nav-link"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
)

export default DesktopNavigation

import React from 'react'
import Link from 'gatsby-link'

const DesktopNavigation = () => (
  <ul className="list-reset hidden md:block">
    <Link
      to="/"
      className="text-black text-lg font-bold no-underline p-1 ml-3 nav-link"
    >
      Home
    </Link>
    <Link
      to="/photos"
      className="text-black text-lg font-bold no-underline p-1 ml-3 nav-link"
    >
      Photos
    </Link>
  </ul>
)

export default DesktopNavigation

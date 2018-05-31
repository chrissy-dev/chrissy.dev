import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <ul className="list-reset">
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

export default Navigation

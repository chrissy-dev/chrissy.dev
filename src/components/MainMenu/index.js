import React from 'react'
import Link from 'gatsby-link'

const MainMenu = () => (
  <ul className="list-reset">
    <Link to="/" className="text-black text-lg font-bold no-underline p-1 ml-3 nav-link">
        Home
    </Link>
    <Link to="/contact" className="text-black text-lg font-bold no-underline p-1 ml-3 nav-link">
        Contact
    </Link>
  </ul>
)

export default MainMenu

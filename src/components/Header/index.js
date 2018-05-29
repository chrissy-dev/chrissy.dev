import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../static/images/cc.jpg'
import HireMe from '../HireMe'
import MainMenu from '../MainMenu'

const Header = ({ siteTitle, forHire }) => (
  <header className="w-full p-6 max-w-xl mx-auto leading-normal">
    <div className="flex items-center">
    <a href="/" className="leading-none">
    <img
      src={Logo} alt={siteTitle}
      className="w-10 rounded-full inline-block border-4 border-transparent hover:border-orange transition"
    />
    </a>
      {forHire && <HireMe text="Available for hire"/> }

      <nav className="flex-1 text-right items-center sm:block w-full sm:w-auto">
        <MainMenu />
      </nav>
    </div>
  </header>
)

export default Header

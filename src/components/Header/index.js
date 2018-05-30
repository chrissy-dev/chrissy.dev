import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../static/images/cc.jpg'

// Components
import Flag from '../Flag'
import Navigation from '../Navigation'

// Style
import tailwind from '../../../tailwind.config.js'

const Header = props => (
  <header className="w-full py-8 max-w-xl mx-auto leading-normal">
    <div className="flex items-center">
      <a href="/" className="leading-none">
        <img
          src={Logo}
          alt={props.siteTitle}
          className="w-10 rounded-full inline-block border-4 border-transparent hover:border-orange transition"
        />
      </a>
      {props.forHire && (
        <Flag
          text="Available for hire"
          linkTo="/contact"
          background={tailwind.colors['green-dark']}
          color="#FFF"
        />
      )}

      <nav className="flex-1 text-right items-center sm:block w-full sm:w-auto">
        <Navigation />
      </nav>
    </div>
  </header>
)

export default Header

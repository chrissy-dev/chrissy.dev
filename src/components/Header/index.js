import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../static/images/cc.jpg'

// Components
import Flag from '../Flag'
import DesktopNavigation from '../DesktopNavigation'
import MobileNavigation from '../MobileNavigation'

// Style
import tailwind from '../../../tailwind.config.js'

const Header = props => (
  <header className="py-4 md:py-8 border-b border-grey-lighter">
    <div className="flex items-center">
      <a href="/" className="leading-none">
        <img
          src={Logo}
          alt={props.siteTitle}
          className="w-10 rounded-full inline-block transition"
        />
      </a>
      {props.forHire && (
        <Flag
          text="Work with me"
          linkTo="mailto:chriscollins238@gmail.com"
          background={tailwind.colors['green-dark']}
          color="#FFF"
        />
      )}

      <div className="flex-1">
        <div className="flex justify-end">
          <MobileNavigation />
          <DesktopNavigation />
        </div>
      </div>
      {/* <Menu />
      <nav className="hidden md:block flex-1 text-right items-center sm:block w-full sm:w-auto">
        <Navigation />
      </nav> */}
    </div>
  </header>
)

export default Header

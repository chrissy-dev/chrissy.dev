import React, { Fragment, Component } from 'react'
import Link from 'gatsby-link'
import { Menu, X } from 'react-feather'
import styled from 'styled-components'
import { MainMenu } from '../../helpers/MainMenu'

export default class MobileNavigation extends Component {
  state = {
    open: false,
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const ButtonToggle = styled.button`
      line-height: 0;
      z-index: 999;
    `
    const MobileMenu = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.99);
      height: 100vh;
      text-align: center;
    `
    let isOpen = this.state.open
    return (
      <Fragment>
        <ButtonToggle
          className="md:hidden border border-grey-light rounded-sm px-3 py-2 flex items-center text-bold hover:bg-grey-lighter"
          onClick={this.toggleMenu}
        >
          {isOpen ? <X size="24" /> : <Menu size="24" />}
        </ButtonToggle>

        {isOpen && (
          <MobileMenu className="md:hidden flex items-center justify-center">
            <ul className="list-reset">
              {MainMenu.map((item, i) => (
                <li key={i}>
                  <a
                    className="text-xl block p-2 no-underline text-black"
                    href={item.route}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </Fragment>
    )
  }
}

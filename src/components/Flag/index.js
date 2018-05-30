import React from 'react'
import styled, { keyframes } from 'styled-components'

const Flag = props => {
  const Link = styled.a`
    position: relative;
    background: ${props.background};
    color: ${props.color};

    &:after {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(31, 157, 85, 0);
      border-right-color: ${props.background};
      border-width: 4px;
      margin-top: -4px;
    }
  `

  return (
    <Link
      href={props.linkTo}
      className="no-underline ml-2 rounded-sm py-1 px-2 text-sm leading-tight"
    >
      {props.text}
    </Link>
  )
}

export default Flag

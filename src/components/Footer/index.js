import React from 'react'
import styled from 'styled-components'

const Footer = props => {
  const Footer = styled.div`
    background-color: ${props.background};
  `

  return (
    <Footer className="w-full p-6 text-center border-t border-grey-lighter">
      <p className="text-sm text-grey">
        © 2018 Chris Collins. All Rights Reserved.
      </p>
    </Footer>
  )
}

export default Footer

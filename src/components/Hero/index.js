import React from 'react'

const Hero = props => {
  return (
    <div className="block w-full px-8 max-w-lg lg:my-8 mx-auto">
      {props.title && <h1 className="mb-2">{props.title}</h1>}

      {props.description && <p className="mb-3">{props.description}</p>}
      {props.children}
    </div>
  )
}

export default Hero

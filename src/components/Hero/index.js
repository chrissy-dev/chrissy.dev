import React from 'react'

const Hero = props => {
  return (
    <div className="block w-full md:px-8 max-w-md md:my-8 mx-auto pb-8">
      {props.title && <h1 className="mb-2">{props.title}</h1>}
      {props.description && <p className="mb-3">{props.description}</p>}
      {props.children}
    </div>
  )
}

export default Hero

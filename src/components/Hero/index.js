import React from 'react'

const Hero = props => {
  return (
    <div className="w-full py-8 max-w-md lg:my-8 mx-auto leading-normal text-center">
      {props.title && <h1 className="mb-2">{props.title}</h1>}
      {props.description && <p className="mb-3">{props.description}</p>}
      {props.children}
    </div>
  )
}

export default Hero

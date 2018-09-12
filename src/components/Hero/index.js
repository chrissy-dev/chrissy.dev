import React from 'react'

const Hero = props => {
  return (
    <div className="container">
      <div className="w-full text-center p-8 md:px-0 md:py-8 max-w-md lg:my-8 mx-auto leading-normal">
        {props.title && <h1 className="mb-2">{props.title}</h1>}
        {props.description && <p className="mb-3">{props.description}</p>}
        {props.children}
      </div>
    </div>
  )
}

export default Hero

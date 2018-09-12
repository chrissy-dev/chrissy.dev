import React from 'react'
import styled from 'styled-components'
import tailwind from '../../../tailwind.config.js'

const Work = props => {
  const Card = styled.div`
    background-color: ${props.background};
  `
  const Line = styled.div`
    background-color: ${props.background};
    display: block;
    width: 56px;
    height: 2px;
  `
  const Link = styled.a`
  `

  return (
    <Card className="p-4 md:p-6 xl:p-8 mb-8 rounded">
      <div className="bg-white shadow-lg md:flex md:flex-row rounded overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full md:w-auto md:h-64"
        />
        <div className="p-6 md:p-6 xl:p-8 leading-normal text-sm">
          <h2 className="mt-0">{props.title}</h2>
          <Line className="my-4" />
          <p>{props.description}</p>
          <Link
            className="mt-2 text-black inline-block rounded text-bold"
            href={props.link}
          >
            {props.linkLabel}
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default Work

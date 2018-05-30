import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'react-feather'

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
    &:after {
      content: ' →';
    }
  `

  return (
    <Card className="p-4 md:p-6 xl:p-8 mb-8 md:mb-0">
      <div className="bg-white shadow-lg">
        <img src={props.image} alt={props.title} />
        <div className="p-6 md:p-6 xl:p-8">
          <h2 className="mt-0">{props.title}</h2>
          <Line className="my-2" />
          <p>{props.description}</p>
          <Link
            className="mt-2 text-black inline-block hover:no-underline"
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

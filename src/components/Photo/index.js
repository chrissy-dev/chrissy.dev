import React from 'react'

const Photo = props => {
  return (
    <figure class="w-full mb-8">
      <img src={props.full} />
      <figcaption class="text-center p-2 text-xs italic">{props.caption}</figcaption>
    </figure>
  )
}

export default Photo

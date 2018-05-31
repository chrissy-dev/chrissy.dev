import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const Photo = props => {
  return (
    <ImageZoom
      image={{
        src: props.full,
      }}
      zoomImage={{
        src: props.thumb,
      }}
      shouldReplaceImage={false}
    />
  )
}

export default Photo

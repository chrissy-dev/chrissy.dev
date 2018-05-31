import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const Photo = props => {
  return (
    <div>
      <ImageZoom
        image={{
          src: props.full,
          style: { width: '20em' },
        }}
        zoomImage={{
          src: props.thumb,
        }}
        shouldReplaceImage={false}
      />
    </div>
  )
}

export default Photo

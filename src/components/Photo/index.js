import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const Photo = props => {
  return (
    <div class="float-left sm:w-1/2  md:w-1/4 sm:px-4 mb-4">
      <ImageZoom
        image={{
          src: props.full,
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

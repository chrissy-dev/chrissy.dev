import React from 'react'
import Link from 'gatsby-link'
import tailwind from '../../../tailwind.config.js'
import Photo from '../../components/Photo'
import { getPhoto, getThumb } from '../../helpers/Photos'

const IndexPage = () => {
  return (
    <div>
      <div class="flex mb-4">
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>{' '}
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>{' '}
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>{' '}
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>{' '}
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>{' '}
        <div class="w-1/4">
          <Photo
            thumb={getPhoto['Buachaille.jpg']}
            full={getThumb['Buachaille.jpg']}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

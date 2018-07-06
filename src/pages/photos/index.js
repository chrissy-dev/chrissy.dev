import React from 'react'
import Link from 'gatsby-link'
import tailwind from '../../../tailwind.config.js'
import Photo from '../../components/Photo'
import Hero from '../../components/Hero'

import { getPhoto, getThumb } from '../../helpers/Photos'

const IndexPage = () => {
  return (
    <div>
      <Hero title="Photos">
        <p className="mb-4">
          I enjoy taking photographs, here's a few recent ones.
        </p>
      </Hero>
      <div className="mb-2 lg:mb-8">
        <div className="w-full clearfix max-w-lg lg:my-8 mx-auto ">
          <Photo
            thumb={getPhoto['BuachailleEtive01.jpg']}
            full={getThumb['BuachailleEtive01.jpg']}
          />
          <Photo
            thumb={getPhoto['BuachailleEtive02.jpg']}
            full={getThumb['BuachailleEtive02.jpg']}
          />

          <Photo
            thumb={getPhoto['BuachailleEtive03.jpg']}
            full={getThumb['BuachailleEtive03.jpg']}
          />

          <Photo
            thumb={getPhoto['BuachailleEtive04.jpg']}
            full={getThumb['BuachailleEtive04.jpg']}
          />

          <Photo
            thumb={getPhoto['LochTulla.jpg']}
            full={getThumb['LochTulla.jpg']}
          />

          <Photo
            thumb={getPhoto['BenLomond.jpg']}
            full={getThumb['BenLomond.jpg']}
          />

          <Photo thumb={getPhoto['Mylo01.jpg']} full={getThumb['Mylo01.jpg']} />

          <Photo thumb={getPhoto['Mylo02.jpg']} full={getThumb['Mylo02.jpg']} />

          <Photo thumb={getPhoto['Dunbar.jpg']} full={getThumb['Dunbar.jpg']} />

          <Photo thumb={getPhoto['Wimpy.jpg']} full={getThumb['Wimpy.jpg']} />

          <Photo
            thumb={getPhoto['CountingHouse.jpg']}
            full={getThumb['CountingHouse.jpg']}
          />

          <Photo
            thumb={getPhoto['CathkinPark.jpg']}
            full={getThumb['CathkinPark.jpg']}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

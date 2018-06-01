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
          I enjoy taking photos and subtly editing them in Lightroom. My current
          camera is an
          <a
            className="text-orange-dark"
            href="https://www.google.co.uk/search?q=Olympus+OM-D+EM10+II"
            target="_blank"
          >
            Olympus OM-D E-M10 II
          </a>
          and I use: Olympus 17mm 1.8, Olympus 45mm 1.8 and Oylmpus 40-150mm.
        </p>
      </Hero>
      <div className="px-2 lg:px-6 mb-2 lg:mb-8">
        <div className="flex -mx-2 lg:-mx-6">
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['BuachailleEtive01.jpg']}
              full={getThumb['BuachailleEtive01.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['BuachailleEtive02.jpg']}
              full={getThumb['BuachailleEtive02.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['BuachailleEtive03.jpg']}
              full={getThumb['BuachailleEtive03.jpg']}
            />
          </div>
        </div>
      </div>

      <div className="px-2 lg:px-6 mb-2 lg:mb-8">
        <div className="flex -mx-2 lg:-mx-6">
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['BuachailleEtive04.jpg']}
              full={getThumb['BuachailleEtive04.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['LochTulla.jpg']}
              full={getThumb['LochTulla.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['BenLomond.jpg']}
              full={getThumb['BenLomond.jpg']}
            />
          </div>
        </div>
      </div>

      <div className="px-2 lg:px-6 mb-2 lg:mb-8">
        <div className="flex -mx-2 lg:-mx-6">
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['Mylo01.jpg']}
              full={getThumb['Mylo01.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['Mylo02.jpg']}
              full={getThumb['Mylo02.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['Dunbar.jpg']}
              full={getThumb['Dunbar.jpg']}
            />
          </div>
        </div>
      </div>

      <div className="px-2 lg:px-6 mb-2 lg:mb-8">
        <div className="flex -mx-2 lg:-mx-6">
          <div className="w-1/3 px-2 lg:px-6">
            <Photo thumb={getPhoto['Wimpy.jpg']} full={getThumb['Wimpy.jpg']} />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['CountingHouse.jpg']}
              full={getThumb['CountingHouse.jpg']}
            />
          </div>
          <div className="w-1/3 px-2 lg:px-6">
            <Photo
              thumb={getPhoto['CathkinPark.jpg']}
              full={getThumb['CathkinPark.jpg']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

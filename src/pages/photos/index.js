import React from 'react'
import Link from 'gatsby-link'
import tailwind from '../../../tailwind.config.js'
import Photo from '../../components/Photo'
import Hero from '../../components/Hero'

import { getPhoto } from '../../helpers/Photos'

const IndexPage = () => {
  return (
    <div>
      <Hero title="Photos">
        <p className="mb-4 text-sm max-w-sm mx-auto">
          All of these photos have been resized and optimised, if you would like any of these in high-res just ask.
        </p>
      </Hero>
      <div className="mb-2 lg:mb-8">
        <div className="w-full max-w-lg lg:my-8 mx-auto ">
          <Photo
            full={getPhoto['TheCobbler.jpg']}
            caption="Ben Arthur's (The Cobbler) iconic summit, September 2018"
          />

          <Photo
            full={getPhoto['Windfarm.jpg']}
            caption="Mountain biking at Whitelee Windfarm, September 2018"
          />

          <Photo
            full={getPhoto['DubrovnikCoast.jpg']}
            caption="Dubrovnik coast, July 2018"
          />

          <Photo
            full={getPhoto['DubrovnikRocks.jpg']}
            caption="Dubrovnik road cutting through rocks, July 2018"
          />

          <Photo
            full={getPhoto['DubrovnikWater.jpg']}
            caption="Dubrovnik rocky coast line, July 2018"
          />

          <Photo
            full={getPhoto['Beer.jpg']}
            caption="Can of Tennent's Lager, June 2018"
          />

          <Photo
            full={getPhoto['LochOssian.jpg']}
            caption="Loch Ossian, June 2018"
          />

          <Photo
            full={getPhoto['BeinnNarnain.jpg']}
            caption="Near the summit of Beinn Narnain, June 2018"
          />

          <Photo
            full={getPhoto['Goatfell.jpg']}
            caption="Incredible peaks around Goatfell, Arran, May 2018"
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

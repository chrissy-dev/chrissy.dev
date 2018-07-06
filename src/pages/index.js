import React from 'react'
import Link from 'gatsby-link'
import Work from '../components/Work'
import tailwind from '../../tailwind.config.js'

import vanillaCalendar from '../static/images/vanilla-calendar.jpg'
import mobTimer from '../static/images/mob-timer.jpg'

const IndexPage = () => (
  <div>
    <div className="w-full py-8 max-w-md lg:my-8 mx-auto leading-normal">
      <h1 className="mb-6">
        I’m Chrissy 👋, <br />
        a UX designer and developer
      </h1>

      <p className="mb-3">
        I live and work in Glasgow, Scotland. I currently work for{' '}
        <a
          className="text-orange-dark"
          href="https://www.arnoldclark.com"
          target="_blank"
        >
          Arnold Clark
        </a>, europes largest independent car company. I am an experienced UX
        designer skilled in JavaScript (React, Vue), HTML, CSS, prototyping,
        user testing and analysis and working in an agile environment.
      </p>
    </div>

    <div className="w-full py-8">
      <div className="flex flex-wrap">
        <div className="md:w-1/2 md:pr-4">
          <Work
            background={tailwind.colors['orange-light']}
            title="Vanilla Calendar"
            description="A very simple Javascript calendar"
            image={vanillaCalendar}
            link="https://github.com/vanilla-calendar/vanilla-calendar"
            linkLabel="View on GitHub"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Work
            background={tailwind.colors['blue-light']}
            title="Mob Timer"
            description="Mob timer that doesn’t get in the way"
            image={mobTimer}
            link="https://github.com/chrisssycollins/simple-mob-timer"
            linkLabel="View on GitHub"
          />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

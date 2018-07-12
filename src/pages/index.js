import React from 'react'
import Link from 'gatsby-link'
import Work from '../components/Work'
import tailwind from '../../tailwind.config.js'
import { withPrefix } from 'gatsby-link'

import vanillaCalendar from '../static/images/vanilla-calendar.jpg'
import mobTimer from '../static/images/mob-timer.jpg'
import jiraIcon from '../static/images/jira-icon.png'

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
      <div class="max-w-lg lg:my-8 mx-auto">
        <Work
          background={tailwind.colors['orange-light']}
          title="Vanilla Calendar"
          description="A very simple Javascript calendar"
          image={vanillaCalendar}
          link="https://github.com/vanilla-calendar/vanilla-calendar"
          linkLabel="View on GitHub"
        />
        <Work
          background={tailwind.colors['pink-light']}
          title="Mob Timer"
          description="Mob timer that doesn’t get in the way"
          image={mobTimer}
          link="https://github.com/chrisssycollins/simple-mob-timer"
          linkLabel="View on GitHub"
        />
        <Work
          background={tailwind.colors['grey-light']}
          title="JIRA Dock Icon"
          description="This icon is the same size as Spotify and Chrome icons so fits nicely in the dock."
          image={jiraIcon}
          link="https://chris-collins.co.uk/jira-replacement-icon/jira-icon-by-@chrisssycollins.zip"
          linkLabel="Download the icons"
        />{' '}
      </div>
    </div>
  </div>
)

export default IndexPage

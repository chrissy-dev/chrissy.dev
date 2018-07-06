import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../static/application.css'

const Layout = ({ children, data }) => (
  <div className="text-black">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content:
            'UX/UI Engineer from Glasgow, stuck right in the middle of design and code',
        },
      ]}
    >
      <link
        href="//fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container leading-normal">
      <Header siteTitle={data.site.siteMetadata.title} forHire={true} />
      {children()}
      <Footer />
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,v2){
        w.chaport = { app_id : '5b0d79b65bbab57e3d598a07' };

        v2=w.chaport;v2._q=[];v2._l={};v2.q=function(){v2._q.push(arguments)};v2.on=function(e,fn){if(!v2._l[e])v2._l[e]=[];v2._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
            `,
      }}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

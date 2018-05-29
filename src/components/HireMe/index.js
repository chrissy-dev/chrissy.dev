import React from 'react'
import Link from 'gatsby-link'

const HireMe = ({ text }) => (
  <a href="/contact" className="no-underline ml-2 rounded-sm py-1 px-2 bg-green-dark text-white text-sm arrow leading-tight">{text}</a>
)

export default HireMe

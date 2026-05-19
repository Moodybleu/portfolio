import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink">
        {props.Home}
      </Link>
      <Link to="/about" className="navigation-links1-navlink1">
        {props.About}
      </Link>
      <Link to="/past-project" className="navigation-links1-navlink2">
        {props.PastProjects}
      </Link>
      <Link to="/current-projects" className="navigation-links1-navlink3">
        {props.CurrentProjects}
      </Link>
      <Link to="/contact" className="navigation-links1-navlink4">
        {props.Contact}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  Home: 'Home',
  About: 'About',
  Contact: 'Contact',
  PastProjects: 'Past Projects',
  rootClassName: '',
  CurrentProjects: 'Current Projects',
}

NavigationLinks1.propTypes = {
  Home: PropTypes.string,
  About: PropTypes.string,
  Contact: PropTypes.string,
  PastProjects: PropTypes.string,
  rootClassName: PropTypes.string,
  CurrentProjects: PropTypes.string,
}

export default NavigationLinks1

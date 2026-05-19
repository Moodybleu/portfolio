import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  const handleClick = () => {
    if (props.onLinkClick) {
      props.onLinkClick()
    }
  }

  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `.trim()}>
      <Link
        to="/"
        className={`navigation-links-navlink${
          props.hideHome ? ' navigation-links-navlink--hidden' : ''
        }`}
        onClick={props.hideHome ? undefined : handleClick}
        tabIndex={props.hideHome ? -1 : 0}
        aria-hidden={props.hideHome}
      >
        {props.Home}
      </Link>
      <Link to="/about" className="navigation-links-navlink1" onClick={handleClick}>
        {props.About}
      </Link>
      <Link
        to="/past-project"
        className="navigation-links-navlink2"
        onClick={handleClick}
      >
        {props.PastProjects}
      </Link>
      <Link
        to="/current-projects"
        className="navigation-links-navlink3"
        onClick={handleClick}
      >
        {props.CurrentProjects}
      </Link>
      <Link to="/contact" className="navigation-links-navlink4" onClick={handleClick}>
        {props.Contact}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Contact: 'Contact',
  About: 'About',
  link_text: 'https://example.com',
  rootClassName: '',
  Home: 'Home',
  PastProjects: 'Past Projects',
  CurrentProjects: 'Current Projects',
  hideHome: false,
}

NavigationLinks.propTypes = {
  Contact: PropTypes.string,
  About: PropTypes.string,
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  Home: PropTypes.string,
  PastProjects: PropTypes.string,
  CurrentProjects: PropTypes.string,
  onLinkClick: PropTypes.func,
  hideHome: PropTypes.bool,
}

export default NavigationLinks

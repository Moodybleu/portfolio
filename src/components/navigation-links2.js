import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links2-text">
        {props.text}
      </Link>
      <Link to="/past-project" className="navigation-links2-text1">
        {props.text1}
      </Link>
      <Link to="/current-projects" className="navigation-links2-text2">
        {props.text2}
      </Link>
      <Link to="/contact" className="navigation-links2-text3">
        {props.text3}
      </Link>
      <Link to="/" className="navigation-links2-text4">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text: 'About',
  text1: 'Past Projects',
  text2: 'Current Projects',
  text3: 'Contact',
  text4: 'Home',
  rootClassName: '',
}

NavigationLinks2.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks2

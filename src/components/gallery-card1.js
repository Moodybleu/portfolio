import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  title: '100 Days of JavaScript',
  image_alt: 'image',
  rootClassName: '',
  subtitle:
    'Working my way through 100 days of javascript just to keep my skills fresh',
  image_src: '/playground_assets/download-3-1500h.jpg',
}

GalleryCard1.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard1

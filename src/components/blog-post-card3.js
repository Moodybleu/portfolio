import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <span className="blog-post-card3-text">{props.label}</span>
        <h1 className="blog-post-card3-text1">{props.title}</h1>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text2">{props.description}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  label: 'Project 1',
  description:
    'Test your memory and dexterity with my latest project - a color-sequence guessing game. In this game, you will be presented with a series of colors that will glow on the screen, and your task is to correctly order them. You have an unlimited number of attempts to get the sequence right. However, if you make a mistake, the game will end and Heidi, who the game is themed after, will take her tennis balls away. Challenge yourself and see how many rounds you can successfully complete!',
  title: "Heidi Say's",
  image_src:
    '/playground_assets/screenshot%202022-12-12%20at%201.03.34%20pm-1500w.png',
}

BlogPostCard3.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard3

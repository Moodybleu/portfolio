import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container page-with-subject">
      <Helmet>
        <title>About - Megan Kussin's Portfolio</title>
        <meta
          name="description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
        <meta property="og:title" content="About - Megan Kussin Portfolio" />
        <meta
          property="og:description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
      </Helmet>
      <h1 className="page-subject">About Me</h1>
      <div className="about-testimonial-card">
        <div className="about-testimonial">
          <span className="about-text1">
            As a resident of the central coast for 25 years, I have been
            fortunate to discover various interests and hobbies that allow me to
            appreciate the stunning landscape. From photography and journaling
            to watercolor painting, I have found joy in creative outlets.
            However, it wasn't until I discovered software engineering that
            I found a passion that truly resonated with me. While the connection
            between software engineering and the natural beauty of the
            California coast may not be immediately obvious, for me, the
            elegance of code is akin to the splendor of my surroundings. With
            this in mind, I decided to pursue software engineering as a career,
            with the goal of using my skills to help preserve the beauty of my
            home for future generations.
          </span>
          <span className="about-text2"> - Megan Kussin</span>
        </div>
        <img
          alt="profile"
          src="/playground_assets/retouched%20megan-500h.png"
          className="about-image"
        />
      </div>
    </div>
  )
}

export default About

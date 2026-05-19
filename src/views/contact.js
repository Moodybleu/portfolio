import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Megan Kussin Portfolio</title>
        <meta
          name="description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
        <meta property="og:title" content="Contact - Megan Kussin Portfolio" />
        <meta
          property="og:description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
      </Helmet>
      <h1 className="contact-text">Contact Me</h1>
      <img
        alt="Succulents"
        src="/playground_assets/succulents-500w.png"
        className="contact-image1"
      />
      <div className="contact-container4">
        <span className="contact-text1">Phone Number</span>
        <a href="tel:805-363-0313" className="contact-link">
          (805) 363 - 0313
        </a>
      </div>
      <div className="contact-container5">
        <span className="contact-text2">LinkedIn Profile</span>
        <a
          href="https://www.linkedin.com/in/megan-kussin/"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-link1"
        >
          www.linkedin.com/in/megan-kussin/
        </a>
      </div>
      <div className="contact-container6">
        <span className="contact-text6">Email Address</span>
        <a
          href="mailto:Megan.kussin@proton.me?subject=Viewed Your Portfolio"
          className="contact-link2"
        >
          Megan.kussin@proton.me
        </a>
      </div>
    </div>
  )
}

export default Contact

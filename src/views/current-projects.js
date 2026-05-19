import React from 'react'

import { Helmet } from 'react-helmet'

import './current-projects.css'

const CurrentProjects = (props) => {
  return (
    <div className="current-projects-container page-with-subject">
      <Helmet>
        <title>CurrentProjects - Megan Kussin Portfolio</title>
        <meta
          name="description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
        <meta
          property="og:title"
          content="CurrentProjects - Megan Kussin Portfolio"
        />
        <meta
          property="og:description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
      </Helmet>
      <h1 className="page-subject">Current Projects</h1>
      <div className="current-projects-gallery">
        <div className="current-projects-gallery-card">
          <img
            alt="100 Days of JavaScript"
            src="/playground_assets/100DaysOfJavaScript.jpg"
            className="current-projects-image"
          />
          <h2 className="current-projects-text">100 Days of JavaScript</h2>
        </div>
        <div className="current-projects-gallery-card1">
          <img
            alt="image"
            src="/playground_assets/download-5-1500h.jpg"
            className="current-projects-image1"
          />
          <h2 className="current-projects-text1">Remix.js</h2>
        </div>
        <div className="current-projects-gallery-card2">
          <img
            alt="image"
            src="/playground_assets/download-1-1500h.jpg"
            className="current-projects-image2"
          />
          <h2 className="current-projects-text2">
            Angular: The Complete guide
          </h2>
        </div>
        <div className="current-projects-gallery-card3">
          <img
            alt="image"
            src="/playground_assets/download-2-1500h.jpg"
            className="current-projects-image3"
          />
          <h2 className="current-projects-text3">Docker and Kubernetes</h2>
        </div>
        <div className="current-projects-gallery-card4">
          <img
            alt="image"
            src="/playground_assets/download-4-1500h.jpg"
            className="current-projects-image4"
          />
          <h2 className="current-projects-text4">100 Days of code: Python</h2>
        </div>
        <div className="current-projects-gallery-card5">
          <img
            alt="image"
            src="/playground_assets/screenshot%202023-01-15%20at%205.25.35%20pm-1500h.png"
            className="current-projects-image5"
          />
          <h2 className="current-projects-text5">HackerRank</h2>
        </div>
      </div>
    </div>
  )
}

export default CurrentProjects

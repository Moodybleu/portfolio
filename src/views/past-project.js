import React from 'react'

import { Helmet } from 'react-helmet'

import Projects from '../components/projects'
import './past-project.css'

const PastProject = (props) => {
  return (
    <div className="past-project-container">
      <Helmet>
        <title>PastProject - Megan Kussin Portfolio</title>
        <meta
          name="description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
        <meta
          property="og:title"
          content="PastProject - Megan Kussin Portfolio"
        />
        <meta
          property="og:description"
          content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
        />
      </Helmet>
      <Projects rootClassName="projects-root-class-name"></Projects>
    </div>
  )
}

export default PastProject

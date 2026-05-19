import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const homeBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/playground_assets/${encodeURIComponent('b&w ocean-1500w.png')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const Home = (props) => {
  return (
    <>
      <div className="home-background" style={homeBackground} aria-hidden="true" />
      <div className="home-container">
        <Helmet>
          <title>Megan Kussin Portfolio</title>
          <meta
            name="description"
            content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
          />
          <meta property="og:title" content="Megan Kussin Portfolio" />
          <meta
            property="og:description"
            content="Experience the expertise of a skilled software engineer with this comprehensive portfolio. Explore a variety of projects utilizing the latest technologies and techniques. From web development to data analysis, this portfolio demonstrates a commitment to quality, innovation, and problem-solving. Learn about the developer's past achievements and see how they can bring your next project to the next level."
          />
        </Helmet>
        <h1 className="home-text3">
          <span className="home-text4">Megan Kussin</span>
          <br className="home-text5"></br>
          <br className="home-text6"></br>
        </h1>
        <span className="home-text7">Frontend Software Engineer</span>
        <Link to="/past-project" className="home-navlink4 button">
          View Portfolio
        </Link>
      </div>
    </>
  )
}

export default Home

import React, { useLayoutEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import './projects.css'

const PROJECT_ITEMS = [
  {
    label: 'Project 1',
    title: "Heidi Say's",
    href: 'https://github.com/Moodybleu/Heidi-Says',
    image: '/playground_assets/screenshot%202022-12-12%20at%201.03.34%20pm-1400w.png',
    alt: 'Heidi Says game screenshot',
    description:
      'Test your memory and dexterity with my first project - a color-sequence guessing game. In this game, you will be presented with a series of colors that will glow on the screen, and your task is to correctly order them. You have an unlimited number of attempts to get the sequence right. However, if you make a mistake, the game will end and Heidi, who the game is themed after, will take her tennis balls away. Challenge yourself and see how many rounds you can successfully complete!',
  },
  {
    label: 'Project 2',
    title: 'A Mile In Her Mind',
    href: 'https://github.com/Moodybleu/A-Mile-In-Her-Mind',
    image: '/playground_assets/a_mile_in_her_mindExample.png',
    alt: 'A Mile In Her Mind app screenshot',
    description:
      'Introducing my second project at General Assembly, A Mile In Her Mind, a word-prompt app designed for individuals who have experienced trauma. This app aims to provide a safe and supportive platform for users to express their emotions and thoughts about their traumatic experiences. Through its selection of thought-provoking word prompts, the app encourages users to process and overcome the pain and negative feelings associated with their trauma. This app is a tool for self-discovery and personal growth, helping users to find healing and understanding.',
  },
  {
    label: 'Project 3',
    title: 'Goal Digger',
    href: 'https://github.com/Moodybleu/goal-digger',
    image:
      '/playground_assets/screenshot%202022-12-13%20at%208.01.46%20pm-1400w.png',
    alt: 'Goal Digger app screenshot',
    description:
      'Goal Digger was my first collaborative project during my time at General Assembly. Together with my team, we developed an app that empowers users to document and organize their bucket list items. The app allows you to create a comprehensive list of your goals, categorize them for better organization and even track progress by marking items as completed. It was an enriching experience working with my team and I am proud of what we accomplished.',
  },
  {
    label: 'Project 4',
    title: 'Pet Pal',
    href: 'https://github.com/Moodybleu/pet-pal-client',
    image: '/playground_assets/pet-pal-screenshot.png?v=2',
    alt: 'Pet Pal app screenshot',
    description:
      "Pet Pals is an all-in-one app for pet owners, initially focused on dog owners, but with plans to expand to support all types of pets in the future. This app is designed to make it easy for pet owners to manage their pet's daily needs, including tracking feeding times, potty breaks, appointments, playdates, vet visits, and medication reminders. It also allows you to store relevant information from vet appointments, making it a convenient one-stop-shop for all your pet care needs.",
  },
]

const ProjectItem = ({ project }) => {
  const mediaRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(null)

  useLayoutEffect(() => {
    const media = mediaRef.current
    if (!media) {
      return undefined
    }

    const syncHeight = () => {
      const stacked = window.matchMedia('(max-width: 991px)').matches
      setContentHeight(stacked ? null : media.offsetHeight)
    }

    syncHeight()

    const observer = new ResizeObserver(syncHeight)
    observer.observe(media)

    const img = media.querySelector('img')
    if (img) {
      img.addEventListener('load', syncHeight)
    }
    window.addEventListener('resize', syncHeight)

    return () => {
      observer.disconnect()
      if (img) {
        img.removeEventListener('load', syncHeight)
      }
      window.removeEventListener('resize', syncHeight)
    }
  }, [project.image])

  return (
    <li className="projects-item">
      <div ref={mediaRef} className="projects-item__media">
        <img src={project.image} alt={project.alt} />
      </div>
      <div
        className="projects-item__content"
        style={contentHeight ? { maxHeight: contentHeight } : undefined}
      >
        <span className="projects-item__label">{project.label}</span>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer noopener"
          className="projects-item__title-link"
        >
          <h2 className="projects-item__title">{project.title}</h2>
        </a>
        <p className="projects-item__description">{project.description}</p>
      </div>
    </li>
  )
}

const Projects = ({ rootClassName = '' }) => {
  return (
    <div className={`projects ${rootClassName}`.trim()}>
      <ul className="projects-list">
        {PROJECT_ITEMS.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </div>
  )
}

Projects.propTypes = {
  rootClassName: PropTypes.string,
}

export default Projects

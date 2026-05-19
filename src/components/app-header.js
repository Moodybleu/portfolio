import React from 'react'
import { useLocation } from 'react-router-dom'

import SiteHeader from './site-header'
import SocialLinks from './social-links'
import './app-header.css'

const AppHeader = () => {
  const isHome = useLocation().pathname === '/'

  return (
    <header
      data-role="Header"
      className={`app-header ${isHome ? 'app-header--home' : ''}`}
    >
      <div className="app-header-inner">
        <SiteHeader
          className="app-header-site-header"
          navRootClassName="app-header-navigation"
          hideHome={isHome}
        />
        <SocialLinks />
      </div>
    </header>
  )
}

export default AppHeader

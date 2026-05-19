import React, { useState } from 'react'

import NavigationLinks from './navigation-links'
import './site-header.css'

const SiteHeader = ({ className = '', navRootClassName = '', hideHome = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className={`site-header ${className}`.trim()} role="navigation">
      <button
        type="button"
        className="site-header-burger"
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
      >
        <svg viewBox="0 0 1024 1024" aria-hidden="true">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z" />
        </svg>
      </button>

      <div className="site-header-desktop-nav">
        <NavigationLinks rootClassName={navRootClassName} hideHome={hideHome} />
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="site-header-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`site-header-mobile ${mobileOpen ? 'site-header-mobile--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="site-header-mobile-top">
          <span className="site-header-mobile-title">Navigation</span>
          <button
            type="button"
            className="site-header-close"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg viewBox="0 0 1024 1024" aria-hidden="true">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z" />
            </svg>
          </button>
        </div>
        <NavigationLinks
          rootClassName="site-header-mobile-nav"
          hideHome={hideHome}
          onLinkClick={() => setMobileOpen(false)}
        />
      </div>
    </div>
  )
}


export default SiteHeader

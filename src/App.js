import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

import AppHeader from './components/app-header'
import './style.css'
import './page-layout.css'
import Contact from './views/contact'
import About from './views/about'
import CurrentProjects from './views/current-projects'
import Home from './views/home'
import PastProject from './views/past-project'

function AppMain() {
  const isHome = useLocation().pathname === '/'

  return (
    <main className={`app-main${isHome ? ' app-main--home' : ''}`}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/past-project" component={PastProject} />
        <Route exact path="/current-projects" component={CurrentProjects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </main>
  )
}

function App() {
  return (
    <Router>
      <AppHeader />
      <AppMain />
    </Router>
  )
}

export default App

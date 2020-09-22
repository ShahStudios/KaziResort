import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home/Home'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
        <Home />
      <Footer />
    </Router>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />

      <Footer />
    </Router>
  )
}

export default App
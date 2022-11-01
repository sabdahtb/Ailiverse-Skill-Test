import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from '~/pages'

const Navigations = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Navigations

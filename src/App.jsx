import { useState } from 'react'

import Home from './Pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './Components/Header/Header'

function App() {


  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import Favoritos from './Pages/Favoritos/Favoritos'
import Home from './Pages/Home/Home'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className=" min-h-screen bg-gray-100">
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  )
}

export default App

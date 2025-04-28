import { useState } from 'react'
import Favoritos from './Pages/Favoritos/Favoritos'
import Details from './Pages/Details/Details'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'

import Home from './Pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

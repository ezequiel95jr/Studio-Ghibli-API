import { useState } from 'react'
import Favoritos from './Pages/Favoritos/Favoritos'
import Details from './Pages/Details/Details'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './Components/Header/Header'
import { useTranslation } from 'react-i18next';
import Footer from './Components/Footer/Footer'
import { ROUTES } from './const/routes'

function App() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.details} element={<Details />} />
        <Route path={ROUTES.favoritos} element={<Favoritos />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

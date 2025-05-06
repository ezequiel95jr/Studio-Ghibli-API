import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Favoritos from './Pages/Favoritos/Favoritos';
import { ROUTES } from './const/routes';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.details} element={<Details />} />
          <Route path={ROUTES.favoritos} element={<Favoritos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

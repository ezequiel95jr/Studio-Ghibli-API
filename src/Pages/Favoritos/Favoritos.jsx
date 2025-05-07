import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import logo from "../../assets/images/noface.png";
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button';
import { useTranslation } from 'react-i18next';
import studioLogo from "../../assets/images/studio.png"; 

const Favoritos = () => {

  const [favoritos, setFavoritos] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const peliculasFavoritas = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(peliculasFavoritas);
  }, []);
  const quitarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter(p => p.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl text-center font-bold mb-5">{t('favoritos.titles')} {favoritos.length}</h2>

      {favoritos.length === 0 ? (
        <div className="relative flex flex-col items-center justify-center gap-3 bg-black-100/10 rounded-xl shadow-lg p-8 text-white text-center animate-fade-in">
                  <img
                    src={studioLogo}
                    alt={"Studio Ghibli Logo"}
                    className="object-contain w-auto h-[200px]"
                  />
          <p className="text-lg font-semibold text-gray-300">Aquí no hay nada por ahora</p>
          <p className="text-sm text-gray-400">¡Agregá contenido para comenzar!</p>
          <Link to={ROUTES.home}>
            <img src={logo} alt="noface-inicio" className="h-[50px] object-contain transition-transform transition-opacity duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
          </Link>
        </div>

      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {favoritos.map((pelicula) => (

            <div className="relative bg-grey-800 rounded-lg shadow-md p-10">
              <div className="text-center mb-3">
                <h3 className="text-white text-xl font-semibold">{pelicula.title}</h3>
              </div>
              <Link to={ROUTES.detailsPath(pelicula.id)}>
                <div key={pelicula.id} className="bg-cover bg-center bg-no-repeat rounded-lg shadow-md p-6 mb-4"
                  style={{ backgroundImage: `url(${pelicula.movie_banner})` }}>
                  <img
                    src={pelicula.image}
                    alt={pelicula.title}
                    className="object-contain w-auto h-[200px]"
                  />
                </div>
              </Link>
              <Button text={t("favoritos.quitar")} onClick={() => quitarFavorito(pelicula.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );


};

export default Favoritos;
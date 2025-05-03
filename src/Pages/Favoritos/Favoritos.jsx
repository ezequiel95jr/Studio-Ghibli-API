import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button';

const Favoritos = () => {

  const [favoritos, setFavoritos] = useState([]);

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
      <h2 className="text-3xl text-center font-bold mb-5">Favoritos {favoritos.length}</h2>

      {favoritos.length === 0 ? (
        <div className="relative bg-grey-800 rounded-lg shadow-md p-10 font-semibold text-center items-center">Aquí no hay nada.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {favoritos.map((pelicula) => (

            <div className="relative bg-grey-800 rounded-lg shadow-md p-10">
              <div className="text-center mb-3">
                <h3 className="text-white text-xl font-semibold">{pelicula.title}</h3>
              </div>
              <Link to={ROUTES.detailsPath(pelicula.id)}>
                <div key={pelicula.id} className="bg-cover bg-center bg-no-repeat rounded-lg shadow-md p-5"
                  style={{ backgroundImage: `url(${pelicula.movie_banner})` }}>
                  <img
                    src={pelicula.image}
                    alt={pelicula.title}
                    className="object-contain w-auto h-[200px] mb-3"
                  />
                </div>
              </Link>
              <Button text="Quitar de Favoritos" onClick={() => quitarFavorito(pelicula.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );


};

export default Favoritos;
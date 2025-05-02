import React, { useState, useEffect } from 'react';
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
      <h2 className="text-3xl text-center font-bold mb-5">Favoritos</h2>
      
      {favoritos.length === 0 ? (
        <div>No tienes películas favoritas.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoritos.map((pelicula) => (
            <div key={pelicula.id}
            className="bg-cover bg-center bg-no-repeat rounded-lg shadow-md p-5"
              style={{ backgroundImage: `url(${pelicula.movie_banner})` }}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white text-xl font-semibold">{pelicula.title}</h3>
                
              </div>
              <img
                src={pelicula.image}
                alt={pelicula.title}
                className="object-contain w-auto h-[200px] mb-3"
              />
              <Button text="Quitar de Favoritos" onClick={() => quitarFavorito(pelicula.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  
};

export default Favoritos;
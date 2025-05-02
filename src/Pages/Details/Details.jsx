import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import styles from './Details.module.css';
import { Heart } from 'lucide-react';
import fondo from '../../assets/images/fondo.png';

const Details = () => {
  const [error, setError] = useState(null);
  const [peliculaSeleccionada, setPelicula] = useState([]);
  const { id } = useParams();
  const [favoritos, setFavoritos] = useState(() => {
    const favsGuardados = localStorage.getItem("favoritos");
    return favsGuardados ? JSON.parse(favsGuardados) : [];
  });

  useEffect(() => {
    const getPelicula = async () => {
      try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        if (!res.ok) throw new Error("La película no existe en la API");
        const data = await res.json();
        console.log("data: ",data);
        setPelicula(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getPelicula();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!peliculaSeleccionada) return <div>Cargando...</div>;
  //funcion para agregar a favoritos

  const esFavorita = favoritos.some(p => p.id === peliculaSeleccionada.id);
  const agregarFavorito = () => {
    const yaAgregada = favoritos.some(p => p.id === peliculaSeleccionada.id);

    let nuevosFavoritos = [...favoritos];
    if (yaAgregada) {
      nuevosFavoritos = favoritos.filter(p => p.id !== peliculaSeleccionada.id);

    } else {
      nuevosFavoritos = [...favoritos, peliculaSeleccionada];

    }

    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
} 

  return (

    <div

      className={styles.banner}
      style={{ '--banner-url': `url(${peliculaSeleccionada.movie_banner})` }}
    >
      <div className={styles.content}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-white text-5xl font-bold mb-5">
            {peliculaSeleccionada.title}<span className="text-gray-400 font-normal text-base"> ({peliculaSeleccionada.original_title})</span>
          </h2>
          <div>
          <button onClick={agregarFavorito} className='flex items-center  mb-4'>
            <Heart color={esFavorita ? 'red' : 'gray'} fill={esFavorita ? 'red' : 'none'} />
            <span>{esFavorita}</span>
          </button>
          </div>
        </div>
        <div className="w-full flex justify-start overflow-hidden">
          <img
            src={peliculaSeleccionada.image}
            alt={peliculaSeleccionada.title}
            className="object-contain w-auto max-w-[300px] h-auto max-h-[500px] mr-5"
          />
          <div className="mt-5 text-white">
           
            <p><strong>Director:</strong> {peliculaSeleccionada.director}</p>
            <p><strong>Productor:</strong> {peliculaSeleccionada.producer}</p>
            <p><strong>Año de estreno:</strong> {peliculaSeleccionada.release_date}</p>
            <p><strong>Duración:</strong> {peliculaSeleccionada.running_time} minutos</p>
            <p><strong>Rating:</strong> {peliculaSeleccionada.rt_score}</p>
            <p><strong>Título original romanizado:</strong>{peliculaSeleccionada.original_title_romanised}</p>
            <p><strong>Descripción:</strong> {peliculaSeleccionada.description}</p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Details;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';

const Details = () => { 
    const [pelicula, setPelicula] = useState([]);
    const { id } = useParams();

    const getPelicula = async () => {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const parsed = await res.json();
        setPelicula(parsed);
    };

    useEffect(() => {   
        getPelicula();
    }, []);

    const peliculaSeleccionada = pelicula.find(p => p.id === id);
    if (!peliculaSeleccionada) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 bg-black">
  <div className="bg-[#515151] rounded-lg shadow-md max-w-[800px] w-full p-5 mt-7 text-center">
    <h2 className="text-white text-5xl font-bold mb-5">{peliculaSeleccionada.title}</h2>
    <div className="w-full flex justify-start overflow-hidden">
      <img
        src={peliculaSeleccionada.image}
        alt={peliculaSeleccionada.title}
        className="object-contain w-[auto] max-w-[300px] h-[auto] max-h-[500px] mr-5"
      />
    </div>
  </div>
</div>

    );     
};

export default Details;

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
        <div className={styles.details}>
            <div className={styles.card}>
                <h2>{peliculaSeleccionada.title}</h2>
                <img
                    src={peliculaSeleccionada.image}
                    alt={peliculaSeleccionada.title}
                    className="w-76 h-auto"
                />
            </div>
        </div>
    );     
};

export default Details;

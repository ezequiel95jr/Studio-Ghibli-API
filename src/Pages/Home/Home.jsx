import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";
const Home = () => {

    const [peliculas, setPeliculas] = useState([]);


    const getPeliculas = async () => {
        const pelisRes = await fetch(
            "https://ghibliapi.vercel.app/films"
        );

        const pelisParsed = await pelisRes.json();
        setPeliculas(pelisParsed);
        console.log(pelisParsed);
    };

    useEffect(() => {
        getPeliculas();
    }, []);


    return (
        <div className={styles.home}>
            <div className={styles.titulo}>
            <h2>Lista de películas</h2>
            </div>
            <div className={styles.contenedor}>
            {peliculas.map((pelicula) => (
                <Card
                key={pelicula.id} 
                pelicula={pelicula} 
                />
            ))}
            </div>
        </div>
    );

}

export default Home;

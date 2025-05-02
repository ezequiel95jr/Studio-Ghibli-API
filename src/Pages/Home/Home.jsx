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
    };

    useEffect(() => {
        getPeliculas();
    }, []);


    return (
        <div className="">
            <div className="text-3xl text-white text-center mb-4 pt-4">
            <h2>Lista de películas</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-[60px] w-full h-full bg-[()] bg-cover bg-center font-sans text-[#333] text-center p-5">
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

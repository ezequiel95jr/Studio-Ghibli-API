import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import SearchBar from "../../Components/SearchBar/SearchBar";
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
        <div className="home-container">
            <SearchBar
            
            />
            {peliculas.map((pelicula) => (
                <Card
                key={pelicula.id} 
                pelicula={pelicula} 
                />
            ))}
        </div>
    );

}

export default Home;

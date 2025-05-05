import { useState, useEffect } from "react";
import { Link } from 'react-router';
import { ROUTES } from "../../const/routes";
import Card from "../../Components/Card/Card";
import Busqueda from "../../Components/Busqueda/Busqueda";
import { useTranslation } from 'react-i18next';
import styles from "./Home.module.css";
import { Bus } from "lucide-react";
const Home = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const { t } = useTranslation();
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

    const peliculasFiltradas = peliculas.filter(p =>
        p.title.toLowerCase().includes(busqueda.toLowerCase())
    );


    return (
        <div className="">
            <div className="relative flex items-center justify-center mb-4 px-4 pt-4">
                <h2 className="text-3xl text-white text-center">{t('home.titles')}</h2>
                <div className="absolute right-4">
                    <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-[60px] w-full h-full bg-[()] bg-cover bg-center font-sans text-[#333] text-center p-5">
                {peliculasFiltradas.map((pelicula) => (
                    <Link to={ROUTES.detailsPath(pelicula.id)}>
                        <Card
                            key={pelicula.id}
                            pelicula={pelicula}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default Home;

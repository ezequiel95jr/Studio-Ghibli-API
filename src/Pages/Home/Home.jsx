import { useState, useEffect } from "react";
import { Link } from 'react-router';
import { ROUTES } from "../../const/routes";
import Card from "../../Components/Card/Card";
import Busqueda from "../../Components/Busqueda/Busqueda";
import Load from "../../assets/images/1.gif";
import { useTranslation } from 'react-i18next';
import styles from "./Home.module.css";
import { Bus } from "lucide-react";
const Home = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const getPeliculas = async () => {
        setLoading(true); 
        try {
          const pelisRes = await fetch("https://ghibliapi.vercel.app/films");
          const pelisParsed = await pelisRes.json();
          setPeliculas(pelisParsed);
        } catch (error) {
          console.error("Error al obtener películas", error);
        } finally {
          setLoading(false);
        }
      };
      

    useEffect(() => {
        getPeliculas();
    }, []);

    const peliculasFiltradas = peliculas.filter(p =>
        p.title.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-black">
            <img src={Load} alt="Cargando" className="w-72 h-72" />
          </div>
        );
      }
      

    return (
        <div className="">
            <div className="relative flex items-center justify-center mb-4 px-4 pt-4">
                <h2 className="text-3xl text-white text-center">{t('home.titles')} </h2>
                <h2>{" ["}{peliculasFiltradas.length}{"]"}</h2>
                <div className="absolute right-4">
                    <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-[60px] w-full h-full bg-black bg-cover bg-center font-sans text-[#333] text-center p-10">
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

import { Link } from 'react-router';
import styles from "./Card.module.css";

const Card = ({ pelicula }) => {
  return (
    <div>
      <Link to={`/details/${pelicula.id}`}>
        <div className="flex-[0_1_calc(25%-20px)] bg-[#515151] p-2.5 rounded-lg shadow-md transition-transform transition-shadow duration-300 text-white hover:scale-105 hover:shadow-lg max-w-[300px] flex flex-col">
          
          {/* Título con estilo que ajusta el texto */}
          <h3 className="text-center text-lg font-bold break-words overflow-hidden">{pelicula.title}</h3>
          
          <img
            src={pelicula.image}
            alt={pelicula.title}
            className="w-full h-auto"
          />
          
          {/* Detalles opcionales de la película */}
          {/*<div>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Año de estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Rating:</strong> {pelicula.rt_score}</p>
            <p><strong>Descripcion:</strong> {pelicula.description}</p>
          </div>*/}
          
        </div>
      </Link>
    </div>
  );
};

export default Card;

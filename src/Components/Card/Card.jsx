import { Link } from 'react-router';
import styles from "./Card.module.css";

const Card = ({ pelicula }) => {
  return (
    <div>
      <Link to={`/details/${pelicula.id}`}>

        <div className={styles.card}>
        <h3>{pelicula.title}</h3>
          <img
            src={pelicula.image}
            alt={pelicula.title}
            className="w-46 h-auto"
          />
          {/*}
          <div>
            
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Año de estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Rating:</strong> {pelicula.rt_score}</p>
            <p><strong>Descripcion:</strong> {pelicula.description}</p>
          </div>
           */}

        </div>
      </Link>
    </div>
  );
};

export default Card;

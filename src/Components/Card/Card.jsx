import { Link } from 'react-router';

const Card = ({ pelicula }) => {
  return (
    <div>
      <Link to={`/details/${pelicula.id}`}>

        <div>
          <img
            src={pelicula.image}
            alt={pelicula.title}
          />

          <div>
            <h3>{pelicula.title}</h3>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Año de estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Rating:</strong> {pelicula.rt_score}</p>
            <p><strong>Descripcion:</strong> {pelicula.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

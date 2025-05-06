
import styles from "./Card.module.css";
import { ROUTES } from "../../const/routes";

const Card = ({ pelicula }) => {
  return (
    <div>
        <div className="flex-[0_1_calc(25%-20px)] bg-[#264653] p-2.5 rounded-lg shadow-md transition-transform transition-shadow duration-300 text-white hover:scale-105 hover:shadow-lg max-w-[300px] flex flex-col">    
          <h3 className="text-center text-lg font-bold break-words overflow-hidden">{pelicula.title}</h3>
          <h3 className="text-gray-400 font-normal">({pelicula.original_title})</h3>  
          <img
            src={pelicula.image}
            alt={pelicula.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
    </div>
  );
};

export default Card;

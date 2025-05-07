import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Modal from "../../Components/Modal/Modal";
import Textarea from '../../Components/TextArea/TextArea';

const Details = () => {
  const [error, setError] = useState(null);
  const [peliculaSeleccionada, setPelicula] = useState([]);
  const { id } = useParams();
  const [imagenModal, setImagenModal] = useState(null);
  const [mensajeModal, setMensajeModal] = useState("");
  const { t } = useTranslation();
  const [favoritos, setFavoritos] = useState(() => {
    const favsGuardados = localStorage.getItem("favoritos");
    return favsGuardados ? JSON.parse(favsGuardados) : [];
  });
  const [manejarComentario, setManejarComentario] = useState(() => {
    const comentariosGuardados = localStorage.getItem("comentarios");
    return comentariosGuardados ? JSON.parse(comentariosGuardados) : [];

  });

  useEffect(() => {
    const getPelicula = async () => {
      try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        if (!res.ok) throw new Error("La película no existe en la API");
        const data = await res.json();
        setPelicula(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getPelicula();
  }, [id]);


  if (error) return <div>{error}</div>;
  if (!peliculaSeleccionada) return <div>Cargando...</div>;

  const esFavorita = favoritos.some(p => p.id === peliculaSeleccionada.id);
  const agregarFavorito = () => {
    const yaAgregada = favoritos.some(p => p.id === peliculaSeleccionada.id);

    let nuevosFavoritos = [...favoritos];
    if (yaAgregada) {
      nuevosFavoritos = favoritos.filter(p => p.id !== peliculaSeleccionada.id);
      setMensajeModal("Película removida de favoritos");
    } else {
      nuevosFavoritos = [...favoritos, peliculaSeleccionada];
      setMensajeModal("Película agregada a favoritos");

    }

    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  }
  return (

    <div

      className={styles.banner}
      style={{ '--banner-url': `url(${peliculaSeleccionada.movie_banner})` }}
    >
      <div className={styles.content}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-white text-5xl font-bold mb-5">
            {peliculaSeleccionada.title}<span className="text-gray-400 font-semibold text-base"> ({peliculaSeleccionada.original_title})</span>
          </h2>
          <div>
            <button onClick={agregarFavorito} className='flex items-center  mb-4'>
              <Heart color={esFavorita ? 'red' : 'gray'} fill={esFavorita ? 'red' : 'none'} />
              <span>{esFavorita}</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-6 bg-[#2a9d8f]/30 p-6 rounded-xl shadow-lg">
          <img
            src={peliculaSeleccionada.image}
            alt={peliculaSeleccionada.title}
            className="object-contain w-auto max-w-[300px] h-auto max-h-[500px] mr-5 cursor-pointer"
            onClick={() => setImagenModal(peliculaSeleccionada.image)}
          />
          <div className="text-white flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.director")}:</span>
              <span>{peliculaSeleccionada.director}</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.productor")}:</span>
              <span>{peliculaSeleccionada.producer}</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.year")}:</span>
              <span>{peliculaSeleccionada.release_date}</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.duracion")}:</span>
              <span>{peliculaSeleccionada.running_time} min</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.rating")}:</span>
              <span>{peliculaSeleccionada.rt_score}</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.titleRomanizado")}:</span>
              <span>{peliculaSeleccionada.original_title_romanised}</span>
            </div>

            <div className="flex items-start gap-2 sm:col-span-2 pt-2">
              <span className="w-32 font-semibold text-[#e9c46a]">{t("Details.descripcion")}:</span>
              <p className="text-justify">{peliculaSeleccionada.description}</p>
            </div>
          </div>


        </div>

        <div>
          <Textarea
            onEnviar={(comentario) => {
              const nuevosComentarios = [
                ...manejarComentario,
                { id: peliculaSeleccionada.id, texto: comentario }
              ];
              setMensajeModal(t("Details.comentarioAgregado"));
              setManejarComentario(nuevosComentarios);
              localStorage.setItem("comentarios", JSON.stringify(nuevosComentarios));
            }}
          />
          <div className="mt-4 text-white">
            <h3 className="font-bold text-lg mb-2">{t("Details.comentarios")}:</h3>
            {manejarComentario
              .filter((c) => c.id === peliculaSeleccionada.id)
              .map((c, i) => (
                <p key={i} className="mb-1 bg-white text-black p-2 rounded">{c.texto}</p>
              ))}
          </div>

        </div>
      </div>
      {mensajeModal && (
        <Modal mensaje={mensajeModal} onClose={() => setMensajeModal("")} />
      )}
      {imagenModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setImagenModal(null)} 
        >
          <img
            src={imagenModal}
            alt="Imagen ampliada"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

    </div>

  );
};

export default Details;

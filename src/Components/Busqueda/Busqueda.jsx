import React from "react";

const Busqueda = ({ busqueda, setBusqueda }) => {
    const manejarCambio = (e) => {
        setBusqueda(e.target.value);
    };
    return (
        <div className="flex justify-center my-4">
            <input 
            type="text"
            placeholder="Buscar pelicula.."
            value={busqueda}
            onChange={manejarCambio}
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md" />
        </div>

    );

}

export default Busqueda;
import React from "react";
import { useTranslation } from 'react-i18next';

const Busqueda = ({ busqueda, setBusqueda }) => {
    const { t } = useTranslation();
    const manejarCambio = (e) => {
        setBusqueda(e.target.value);
    };
    return (
        <div className="flex justify-center my-4">
            <input 
            type="text"
            placeholder={t('Busqueda.placeholder')}
            value={busqueda}
            onChange={manejarCambio}
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md" />
        </div>

    );

}

export default Busqueda;
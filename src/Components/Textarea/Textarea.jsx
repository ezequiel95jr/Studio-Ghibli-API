import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Textarea({ onEnviar }) {
  const [comentario, setComentario] = useState("");
    const { t } = useTranslation();

  const handleChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = () => {
    if (comentario.trim()) {
      onEnviar(comentario);
      setComentario("");
    }
  };

  return (
    <div className="mt-6">
      <label htmlFor="comentario" className="block text-lg font-semibold">
        {t("TextArea.titulo")}
      </label>
      <textarea
        id="comentario"
        className="w-full mt-2 p-2 border rounded resize-none"
        rows="4"
        value={comentario}
        onChange={handleChange}
        placeholder={t("TextArea.placeholder")}
      />
      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {t("TextArea.enviar")}
      </button>
    </div>
  );
}

export default Textarea;

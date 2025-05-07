import React, { useEffect } from "react";

const Modal = ({ mensaje, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#2a9d8f] text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in text-center">
        {mensaje}
      </div>
    </div>
  );
};

export default Modal;

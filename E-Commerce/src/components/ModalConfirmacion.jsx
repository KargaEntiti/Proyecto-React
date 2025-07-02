import React from "react";
import "../style/index.css"
import "../style/Modal.css";
 
const ModalConfirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <p>{mensaje}</p>
        <div className="modal-botones">
          <button className="confirmar" onClick={onConfirmar}>Sí, eliminar</button>
          <button className="cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;

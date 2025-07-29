import React from "react";
import "../style/index.css"
import "../style/Modal.css";
 
const ModalConfirmacion = ({ titulo, lista=[],mensaje, onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <p>{mensaje}</p>
        <p>{titulo}</p>
        {lista.length > 0 && (
          <ul>
            <p>
            {lista.map((item, index) => (
              <li key={index}>- {item.nombre} : {item.cantidad}  </li>
            ))}
            </p>
          </ul>)}
        <div className="modal-botones">
          <button className="confirmar" onClick={onConfirmar}>Sí, eliminar</button>
          <button className="cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;

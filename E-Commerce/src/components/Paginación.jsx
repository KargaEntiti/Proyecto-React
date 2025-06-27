import React, { useState, useEffect } from "react";

const Paginacion = ({ totalPaginas, setPaginaActual , paginaActual }) => {
  
  return (
      <div className="paginacion ">
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button 
            key={index}
            className={paginaActual === index + 1 ? "activo boton" : "boton"} 
            onClick={() => setPaginaActual(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
  );
};

export default Paginacion;

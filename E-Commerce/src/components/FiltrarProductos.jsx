import React, { useState, useEffect } from "react";
import "../style/Filtro.css"

const FiltroProductos = ({busqueda, setBusqueda }) => {
  
  return (
    <div className="barra-busqueda">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="busqueda"
      />
    </div>
  );
};

export default FiltroProductos;

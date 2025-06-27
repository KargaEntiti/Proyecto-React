import React, { useState, useEffect } from "react";

const FiltroProductos = ({busqueda, setBusqueda }) => {
  
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="busqueda"
      />
    </div>
  );
};

export default FiltroProductos;

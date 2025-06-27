import React, { useState, useEffect } from "react";

function ListaProductos() {
  const [productos, setProductos] = useState([]);       // Estado para almacenar productos
  const [cargando, setCargando] = useState(true);       // Estado para controlar la carga

  useEffect(() => {
    // Simulación de llamada a API (reemplazá por tu URL real de MockAPI)
    fetch("https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);        // Guardar productos en el estado
        setCargando(false);        // Ocultar spinner o mensaje de carga
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="p-4">Cargando productos...</p>;  // Mostrar mientras se carga
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <li key={producto.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-40 object-cover mt-2"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProductos;

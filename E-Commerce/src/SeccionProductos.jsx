import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";


const SeccionProductos = ({agregarAlCarrito}) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
    /*
    Hacer Función para agregar un producto al carrito.
    spread (...carrito)
    */ 

  useEffect(() => {
    fetch("https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="flex justify-center items-center h-60">
        <ClipLoader size={50} color="#4F46E5" />
      </div>
    );
  }

  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Nuestros Productos</h2>
      {productos.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold text-gray-700">{producto.nombre}</h3>
              <p className="text-indigo-600 font-bold">${producto.precio}</p>
              <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
              onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al carrito
              </button>
              <Link to={`/productos/${producto.id}`}> Ver Más</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SeccionProductos;

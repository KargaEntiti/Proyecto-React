import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";


const SeccionProductos = ({agregarAlCarrito, setProductos}) => {
  const [productosLocales, setProductosLocales] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductosLocales(data);
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
      <div>
        <ClipLoader size={100} color="#4F46E5" />
      </div>
    );
  }

  return (
    <section>
      <h2>Nuestros Productos</h2>
      {productosLocales.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div>
          {productosLocales.map((producto) => (
            <div key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
              />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <button
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

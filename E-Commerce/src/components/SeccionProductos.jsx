import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import "./style/SeccionProductos.css"


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
        <div className="producto-grid">
          {productosLocales.map((producto) => (
            <div className="producto-tarjetas" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-precio">${producto.precio}</p>
                <div className="producto-boton">
                <button className="boton "
                onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
                <Link className="boton enlace-boton" to={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SeccionProductos;

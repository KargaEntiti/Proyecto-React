import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import "../style/SeccionProductos.css"
import { Helmet } from 'react-helmet';
import { useCarrito } from '../context/CarritoContext';
import FiltroProductos from "../components/FiltrarProductos";
import Paginacion from "../components/Paginación";


const SeccionProductos = ({setProductos}) => {
  const [productosLocales, setProductosLocales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { agregarAlCarrito } = useCarrito();



  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  useEffect(() => {
    setPaginaActual(1);
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

    useEffect(() => {
    setPaginaActual(1); // reinicia a la primera página al cambiar filtro
  }, [busqueda]);

  const productosFiltrados = productosLocales.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(indicePrimero, indiceUltimo);

  if (cargando) {
    return (
      <div>
        <ClipLoader size={100} color="#4F46E5" />
      </div>
    );
  }

  return (
    <section>
      <Helmet><title>Inicio</title></Helmet>
      <h2>Nuestros Productos</h2>
      <div className="">
        <Paginacion 
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          setPaginaActual={setPaginaActual}
        />
      </div>
      <FiltroProductos busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="producto-grid">
        {productosPaginados.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          productosPaginados.map((producto) => (
            <div className="producto-tarjetas" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div className="producto-boton">
                  <button className="boton" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                  <Link className="boton" to={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPaginaActual={setPaginaActual}
      />
    </section>
  );
};

export default SeccionProductos;
import { useProducts } from "../context/ProductosContext";
import { useState, useRef, useEffect } from "react";
import FormularioProducto from "./FormularioProducto";
import { FaTrash,FaEdit,FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify';
import "../style/Lista.css"
import ModalConfirmacion from "../components/ModalConfirmacion";
import {useLocation} from "react-router-dom"


const ListaProductos = () => {
  const { productos, eliminarProducto } = useProducts();
  const [editando, setEditando] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const formularioRef = useRef(null);
  const listaRef = useRef(null);

  const location = useLocation()

  const handleEliminarClick = (producto) => {
  setProductoAEliminar(producto);
  setModalVisible(true);
};

const confirmarEliminacion = () => {
  eliminarProducto(productoAEliminar.id);
  setModalVisible(false);
};

useEffect (() => {
  if (location.hash === "#formulario" && formularioRef.current) {
    formularioRef.current.scrollIntoView({ behavior: "smooth"})
  }
 if (location.hash ==="#lista" && listaRef.current) {
  listaRef.current.scrollIntoView({ behavior: "smooth" })
 } 
}, [location])

  return (
    <div className="container" ref={listaRef}>
      <h2>Lista de Productos</h2>
      {productos.map(p => (
        <div className="container text-left" key={p.id}>
          <div class="d-flex justify-content-center gap-1">
            <strong className="">{p.nombre}</strong>
            <p className="mb-0">- $ {p.precio}</p>
          </div>
          <p className="">{p.descripcion}</p>
          <button className="boton editar" onClick={() => setEditando(p)}><FaEdit /> Editar</button>
          <button className="boton eliminar" onClick={() => 
            {
            setProductoAEliminar(p);
            setModalVisible(true);
            }}>
              <FaTrash /> Eliminar</button>
        </div>
      ))}
      <FormularioProducto 
        productoAEditar={editando} 
        onFinish={() => setEditando(null)}
        forRef={formularioRef} 
        />
        {modalVisible && (
          <ModalConfirmacion
            mensaje={`¿Estás seguro de eliminar "${productoAEliminar.nombre}"?`}
            onConfirmar={() => {
              eliminarProducto(productoAEliminar.id);
              setModalVisible(false);
              setProductoAEliminar(null);
            }}
            onCancelar={() => {
              setModalVisible(false);
              setProductoAEliminar(null);
            }}
          />
        )}
    </div>
  );
};

export default ListaProductos;

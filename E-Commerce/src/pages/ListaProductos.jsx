import { useProducts } from "../context/ProductosContext";
import { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import { FaTrash,FaEdit,FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify';


const ListaProductos = () => {
  const { productos, eliminarProducto } = useProducts();
  const [editando, setEditando] = useState(null);

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      {productos.map(p => (
        <div className="container text-center" key={p.id}>
          <strong>{p.nombre}</strong> - ${p.precio}
          <p className="text-center">{p.descripcion}</p>
          <button className="btn btn-outline-success" onClick={() => setEditando(p)}><FaEdit /> Editar</button>
          <button className="btn btn-outline-danger" onClick={() => eliminarProducto(p.id)}><FaTrash /> Eliminar</button>
          <FaPlus />
          
          
        </div>
      ))}
      <h2>{editando ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
      <FormularioProducto productoAEditar={editando} onFinish={() => setEditando(null)} />
    </div>
  );
};

export default ListaProductos;

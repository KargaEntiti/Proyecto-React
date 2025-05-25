import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DetalleProducto({productos}) {
  const { id } = useParams(); //cuales son las variables de esos puntos
  const producto = productos.find(p => p.id === id);
  console.log (producto)
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>

      <button>
      <Link to={`/`}> Volver</Link>
        </button>
    </div>
  );
}

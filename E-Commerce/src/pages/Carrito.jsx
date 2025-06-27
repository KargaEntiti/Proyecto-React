import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {
  const {
    carrito,
    vaciarCarrito,
    agregarAlCarrito,
    disminuirCantidad,
    eliminarProducto,
  } = useCarrito();

  const [mostrarCarrito, setMostrarCarrito] = useState(true);

  const toggleCarrito = () => setMostrarCarrito(!mostrarCarrito);

  const totalGeneral = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div>
      <Helmet>
        <title>Carrito</title>
      </Helmet>

      <h2>🛒 Carrito</h2>

      <button className="boton" onClick={toggleCarrito}>
        {mostrarCarrito ? "Ocultar Carrito" : "Ver Carrito"}
      </button>

      {mostrarCarrito && (
        <div>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div>
              {carrito.map((item) => (
                <div key={item.nombre} style={{ marginBottom: "10px" }}>
                  <strong>{item.nombre}</strong> - ${item.precio} × {item.cantidad} = $
                  {(item.precio * item.cantidad).toFixed(2)}
                  <button onClick={() => agregarAlCarrito(item)} style={{ marginLeft: "10px" }}>
                    +
                  </button>
                  <button onClick={() => disminuirCantidad(item.nombre)}>-</button>
                  <button
                    onClick={() => eliminarProducto(item.nombre)}
                    style={{ marginLeft: "10px", color: "red" }}
                  >
                    🗑️ Eliminar todos
                  </button>
                </div>
              ))}
              <hr />
              <p><strong>Total: ${totalGeneral.toFixed(2)}</strong></p>
            </div>
          )}
          <button className="boton" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;

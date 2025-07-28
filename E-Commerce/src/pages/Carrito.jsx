import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useCarrito } from '../context/CarritoContext';
import './../style/carrito.css'

const Carrito = () => {
  const {
    carrito,
    vaciarCarrito,
    agregarAlCarrito,
    disminuirCantidad,
    eliminarProducto,
  } = useCarrito();

  const [mostrarCarrito] = useState(true);

  const totalGeneral = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const formRef = useRef(null)

  useEffect (() => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  })

  return (
    <div className="container">
      <Helmet>
        <title>Carrito</title>
      </Helmet>

      <h2>🛒 Carrito</h2>

      {mostrarCarrito && (
        <div className="carrito" ref={formRef}>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <div className="carrito-header carrito-grid" style={{ marginBottom: "10px" }}>
                <div className="grilla">
                  <strong>Item</strong> 
                </div>
                <div className="grilla">
                  <p>Precio</p>
                </div>
                <div className="grilla">
                  <p>Cantidad</p>
                </div><div className="grilla">
                  <p>Total</p>
                </div>
                <div className="grilla">
                  <strong>Operaciones</strong>
                </div>
              </div>

              {carrito.map((item) => (
                <div className="carrito-item carrito-grid" key={item.nombre} style={{ marginBottom: "10px" }}>
                  <strong>{item.nombre}</strong>
                  <p>${item.precio}</p>
                  <p>×{item.cantidad}</p>
                  <p>= ${(item.precio * item.cantidad).toFixed(2)}</p>
                  <div className="acciones">
                    <button 
                      className="boton" 
                      onClick={() => {
                        agregarAlCarrito(item);
                        toast.success("Producto agregado")
                        }} style={{ marginLeft: "10px" }}
                    >
                      +
                    </button>
                    <button 
                      className="boton" 
                      onClick={() => 
                      {
                        disminuirCantidad(item.nombre);
                        toast.success("Producto eliminado")
                      }}
                    >
                      -
                    </button>
                    <button
                      className="boton"
                      onClick={() => {
                        eliminarProducto(item.nombre)
                        toast.success("Productos eliminado")
                      }}
                    >
                      🗑️ Eliminar todos
                    </button>
                  </div>
                </div>
              ))}          
              <hr />
              <p>
                <strong>Total: ${totalGeneral.toFixed(2)}</strong>
              </p>
          <button className="boton" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
          </>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;

import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useCarrito } from '../context/CarritoContext';
import '../style/Carrito.css'
import ModalConfirmacion from "../components/ModalConfirmacion";
import QRWhatsapp from "../components/QrCarrito";
QRWhatsapp
const Carrito = () => {
  const {
    carrito,
    vaciarCarrito,
    agregarAlCarrito,
    disminuirCantidad,
    eliminarProducto,
  } = useCarrito();

  const [mostrarCarrito] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);
  const [eliminarTodo, setEliminarTodo] = useState(false);

  const abrirModalProducto = (producto) => {
  setProductoAEliminar(producto);
  setEliminarTodo(false);
  setModalVisible(true);
};

const abrirModalTodo = () => {
  setEliminarTodo(true);
  setModalVisible(true);
};

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
                        abrirModalProducto(item)
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}          
              <hr />
              <p>
                <strong>Total: ${totalGeneral.toFixed(2)}</strong>
              </p>
          <button className="boton" onClick={abrirModalTodo}>
            Vaciar Carrito
          </button>
          </>
          )}
        </div>
      )}
      {modalVisible && (
          <ModalConfirmacion
              titulo={
            eliminarTodo
              ? "¿Estás seguro de eliminar los siguientes productos?"
              : `¿Estás seguro de eliminar "${productoAEliminar?.nombre}"?`
            }
            lista={eliminarTodo ? carrito : []}

            onConfirmar={() => {
              if (eliminarTodo) {
                vaciarCarrito();
              } else if (productoAEliminar) {
                eliminarProducto(productoAEliminar.nombre);
              }
              setModalVisible(false);
              setProductoAEliminar(null);
            }}
            onCancelar={() => {
              setModalVisible(false);
              setProductoAEliminar(null);
            }}
          />
        )}
        {carrito.length > 0 && (
          <QRWhatsapp carrito={carrito} total={totalGeneral} />
        )}
    </div>
  );
};

export default Carrito;

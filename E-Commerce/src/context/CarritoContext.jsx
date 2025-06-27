// src/context/CarritoContext.jsx
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const index = prev.findIndex(p => p.nombre === producto.nombre);
      if (index !== -1) {
        const nuevo = [...prev];
        nuevo[index].cantidad += 1;
        return nuevo;
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const disminuirCantidad = (nombre) => {
    setCarrito((prev) => {
      const index = prev.findIndex(p => p.nombre === nombre);
      if (index !== -1) {
        const nuevo = [...prev];
        if (nuevo[index].cantidad > 1) {
          nuevo[index].cantidad -= 1;
        } else {
          nuevo.splice(index, 1);
        }
        return nuevo;
      }
      return prev;
    });
  };

  const eliminarProducto = (nombre) => {
    setCarrito((prev) => prev.filter(p => p.nombre !== nombre));
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        vaciarCarrito,
        disminuirCantidad,
        eliminarProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// context/ProductsContext.jsx
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const ProductsContext = createContext();

const API_URL = 'https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos';


export const useProducts = () => useContext(ProductsContext);

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

const agregarProducto = async (producto) => {
  try {
    const response = await axios.post(API_URL, producto);
    setProductos(prev => [...prev, response.data]);
  } catch (error) {
    console.error('Error al agregar producto:', error);
  }
};

const editarProducto = async (productoActualizado) => {
  if (!productoActualizado.id) return;
    try {
      const response = await axios.put(`${API_URL}/${productoActualizado.id}`, productoActualizado);
      setProductos(prev =>
        prev.map(p => p.id === productoActualizado.id ? response.data : p)
      );
    } catch (error) {
      toast.error('❌ Error al editar producto');
      console.error('Error al editar producto:', error);
    }
  };

const eliminarProducto = async (id) => {
  
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProductos(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      toast.error('❌ Error al eliminar producto');
      console.error('Error al eliminar producto:', error);
    }
  
};

useEffect(() => {
  const fetchProductos = async () => {
    try {
      const response = await axios.get(API_URL);
      setProductos(response.data);
    } catch (error) {
       toast.error('❌ Error al obtener productos');
      console.error('Error al obtener productos:', error);
    }
  };

  fetchProductos();
}, []);

  return (
    <ProductsContext.Provider value={{ productos, agregarProducto, editarProducto, eliminarProducto }}>
      {children}
    </ProductsContext.Provider>
  );
};

/*
    se definiio un contexto react
    crea un provider y guarda el estado global de los productos
    exporta un custom hook useProducts
*/ 
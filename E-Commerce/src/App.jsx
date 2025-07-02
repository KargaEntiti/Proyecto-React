import { useState , useEffect } from 'react'
import './style/App.css'
import Rutas from './components/Rutas';
import { Helmet } from 'react-helmet';
import { toast } from "react-toastify";
import Sidebar from "./components/Sidebar";

function App() {

  const [carrito, setCarrito] = useState([]);
  const [productos,setProductos] =useState([]);

  const [estaAutenticado, setEstaAutenticado] = useState(
    localStorage.getItem("autenticado") === "true"
  );
  useEffect(() => {
  localStorage.setItem("autenticado", estaAutenticado.toString());
}, [estaAutenticado]);


  const agregarAlCarrito = (producto) => {
  setCarrito((prevCarrito) => {
    const index = prevCarrito.findIndex(p => p.nombre === producto.nombre);

    if (index !== -1) {
      // Ya existe: actualiza cantidad
      const nuevoCarrito = [...prevCarrito];
      nuevoCarrito[index].cantidad += 1;
      toast.success(`🛒 Se agregó otra unidad de "${producto.nombre}"`);
      return nuevoCarrito;
    } else {
      // Nuevo: lo agrega con cantidad = 1
      toast.success(`🛒 Producto "${producto.nombre}" agregado`);
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    }
  });
};

  return (
    <div>
        <Helmet>
        <title>Inicio</title>
        <meta name='Inicio' content='Productos del E-Commerce'/>
        </Helmet>
        <Sidebar />
        <Rutas
        carrito={carrito}
        setCarrito={setCarrito}
        agregarAlCarrito={agregarAlCarrito}
        productos={productos}
        setProductos={setProductos}
        estaAutenticado={estaAutenticado}
        setEstaAutenticado={setEstaAutenticado}
        >  
        </Rutas>    
    </div>
  );
}

export default App

import { useState , useEffect } from 'react'
import './App.css'
import Rutas from './Rutas';


function App() {

  const [carrito, setCarrito] = useState([]);

  const [productos,setProductos] =useState([]);
  const [estaAutenticado, setEstaAutenticado] = useState (false)

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const [cargando, setCargando] = useState(true);

    useEffect(() => {
    fetch("https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  
  return (
    <div>
        <Rutas
        carrito={carrito}
        setCarrito={setCarrito}
        agregarAlCarrito={agregarAlCarrito}
        productos={productos}
        estaAutenticado={estaAutenticado}
        setEstaAutenticado={setEstaAutenticado}
        >  </Rutas>
    </div>
  );
}

export default App

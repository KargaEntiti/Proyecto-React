import { useState , useEffect } from 'react'
import './App.css'
import Rutas from './components/Rutas';

function App() {

  const [carrito, setCarrito] = useState([]);
  const [productos,setProductos] =useState([]);
  const [estaAutenticado, setEstaAutenticado] = useState (false)

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };  
  return (
    <div>
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

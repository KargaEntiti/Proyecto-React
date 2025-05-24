import { useState } from 'react'
import './App.css'
import ListaDeProductos from "./Clase_2/ListaDeProductos";
import Tarjeta from './Clase_2/Tarjeta';
import Boton from './Clase_2/Boton';
import TarjetaProyecto from './Clase_3/TarjetaProyecto';
import GaleriaIntereses from './Clase_3/GaleriaIntereses';
import ListarProductos from './Clase_4/ListarProductos'
import Carrito from './Clase_4/Carrito';
import Layout from './Clase_4/Layout';
import Productos from './Clase_4/Productos';
import SeccionProductos from './Clase_4/SeccionProductos';
import { Routes, Route } from 'react-router-dom';
import About from "./Clase_5/About"
import Contact from "./Clase_5/Contact"
import Rutas from './Clase_5/Rutas';
import { productos } from './Clase_6/productosDB';


function App() {

  const [carrito, setCarrito] = useState([]);

  const [estaAutenticado, setEstaAutenticado] = useState (false)

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const [mensaje, setMensaje] = useState("");


  const manejarGuardar = () => alert("Guardado correctamente");
  const manejarCancelar = () => alert("Cancelado");
  const manejarEliminar = () => alert("Elemento eliminado");


  console.log ("Esta autenticado:",estaAutenticado)
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

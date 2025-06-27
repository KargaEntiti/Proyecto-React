// src/Rutas.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from '../Clase_4/Layout'
import SeccionProductos from '../Clase_4/SeccionProductos'
import About from './About'
import Contact from './Contact'
import Carrito from '../Clase_4/Carrito'
import DetalleProducto from '../Clase_6/DetalleProducto'
import RutaPrivada from '../Clase_6/RutaPrivada'
import AdminPanel from "../Clase_6/AdminPanel";
import Login from '../Clase_6/Login'
import FormularioProducto from '../Clase_10/FormularioProducto'
import ListaProductos from '../Clase_11/ListaProductos'
import FormulariosProducto from '../Clase_11/FormulariosProducto'
import FormularioAgregarProducto from '../Clase_12/FormularioAgregarProducto'
import ListaDeProductos from '../Clase_13/ListaDeProductos'



export default function Rutas({ carrito, setCarrito, agregarAlCarrito, productos, estaAutenticado, setEstaAutenticado }) {

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<SeccionProductos agregarAlCarrito={agregarAlCarrito}/>}
          >
          </Route>
          
          <Route 
            path='/carrito' 
            element={
            <RutaPrivada estaAutenticado={estaAutenticado}>
            <Carrito carrito={carrito} setCarrito={setCarrito}/>
            </RutaPrivada>
            }
          />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/crear" element={<FormulariosProducto />} />
          <Route path="/Agregar" element={<FormularioAgregarProducto />} />
          <Route path="/Lista" element={<ListaDeProductos productos={productos} />}/>
          <Route
            path="/admin"
            element={
            <RutaPrivada estaAutenticado={estaAutenticado}>
              <AdminPanel />
            </RutaPrivada>
            }
          />
          <Route
            path='/formulario' element={<FormularioProducto />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productos/:id" element={<DetalleProducto productos={productos}/>} /> {/** los dos puntos indica que va a ser una variable */}
        </Route>
        <Route
          path='/login' 
          element={<Login setEstaAutenticado={setEstaAutenticado} />}>
        </Route>
      </Routes>
  )
}

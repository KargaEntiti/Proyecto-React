import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import SeccionProductos from './SeccionProductos'
import About from './About'
import Contact from './Contact'
import Carrito from './Carrito'
import DetalleProducto from './DetalleProducto'
import RutaPrivada from './RutaPrivada'
import AdminPanel from "./AdminPanel";
import Login from './Login'



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
          
          <Route
            path="/admin"
            element={
            <RutaPrivada estaAutenticado={estaAutenticado}>
              <AdminPanel />
            </RutaPrivada>
            }
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

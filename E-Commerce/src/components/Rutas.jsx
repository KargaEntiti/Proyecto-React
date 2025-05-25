import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import SeccionProductos from '../pages/SeccionProductos'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Carrito from './Carrito'
import DetalleProducto from './DetalleProducto'
import RutaPrivada from '../auth/RutaPrivada'
import AdminPanel from "../pages/AdminPanel";
import Login from './Login'
import NotFound from "../pages/NotFound"



export default function Rutas({ carrito, setCarrito, agregarAlCarrito, productos, estaAutenticado, setEstaAutenticado, setProductos }) {

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<SeccionProductos agregarAlCarrito={agregarAlCarrito} setProductos={setProductos}/>}
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
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
  )
}

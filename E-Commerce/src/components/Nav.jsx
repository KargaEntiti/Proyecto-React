import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { estaAutenticado, logout, usuario } = useAuth();
  return (
    
    <nav>
      {!estaAutenticado ? (
        <Link to="/Login" className="boton">Iniciar Sesión</Link>
      ) : (
        <button className="boton" onClick={logout}>Cerrar Sesión</button>
      )}
      <div>
        <Link to="/" className="boton">Inicio</Link>
        <Link to="/Carrito" className="boton">Carrito</Link>
        <Link to="/About" className="boton">Acerca de</Link>
        <Link to="/Contact" className="boton">Contacto</Link>
        {usuario?.rol === "admin" && (
          <>
            <Link to="/NuevoProducto" className="boton">Nuevo Producto</Link> 
            <Link to="/Productos" className="boton">Lista de Productos</Link>
          </>
        )}  
      </div>
    </nav>
  );
}

export default Nav;
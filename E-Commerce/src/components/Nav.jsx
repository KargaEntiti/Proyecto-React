import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Sidebar.css";

const Nav = ({className="", toggleSidebar}) => {
  const { estaAutenticado, logout, usuario } = useAuth();


  return (  
    <nav className={`${className}`}>
      <div className={`container-${className}`}>
        {/* Botón hamburguesa */}
        <button className="boton hamburguesa" onClick={toggleSidebar}>
          ☰
        </button>
        <Link to="/" className="boton">Inicio</Link>
        <Link to="/Carrito" className="boton">Carrito</Link>
        {usuario?.rol === "admin" && (
          <>
            <Link to="/NuevoProducto#formulario" className="boton">Nuevo Producto</Link> 
            <Link to="/Productos#lista" className="boton">Lista de Productos</Link>
          </>
        )}  
      </div>
    </nav>
  );
}

export default Nav;
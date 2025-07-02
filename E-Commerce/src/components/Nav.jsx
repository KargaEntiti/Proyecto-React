import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Sidebar.css";

const Nav = ({className=""}) => {
  const { estaAutenticado, logout, usuario } = useAuth();
  
  return (  
    <nav className={`${className}`}>
      <div className={`container-${className}`}>
        <Link to="/" className="boton">Inicio</Link>
        <Link to="/Carrito" className="boton">Carrito</Link>
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
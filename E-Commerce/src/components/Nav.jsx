import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="boton">Inicio</Link>
        <Link to="/Carrito" className="boton">Carrito</Link>
        <Link to="/About" className="boton">Acerca de</Link>
        <Link to="/Contact" className="boton">Contacto</Link>    
      </div>
    </nav>
  );
}

export default Nav;

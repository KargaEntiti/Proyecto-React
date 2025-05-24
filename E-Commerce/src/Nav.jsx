import { Link } from "react-router-dom";

const Nav = () => {
  return (
        <nav>
      <div className="flex">
        <p>
          <Link to="/">Inicio</Link></p>
        <p>
          <Link to="/Carrito">Carrito</Link>
        </p>
        <p>
          <Link to="/About">Acerca de</Link>
        </p>
        <p>
          <Link to="/Contact">Contacto</Link>
        </p>
      </div>
    </nav>
  );
}

export default Nav;

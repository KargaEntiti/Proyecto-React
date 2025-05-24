import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
        <p>
        Error 404 Pagina No encontrada
        </p>
        <button>
            <Link to={"/"}>Volver</Link>
        </button>
    </div>
    
  );
}

export default Footer;

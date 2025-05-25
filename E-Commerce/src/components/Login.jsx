import { Link } from "react-router-dom";
export default function Login({setEstaAutenticado}) {

  const manejarLogin = () => {
    setEstaAutenticado(true)
  }
  return (
  <div>
    <h2>Página de inicio de sesión</h2>
    <Link to={"/"}>
      <button onClick={manejarLogin}>
      Iniciar Sesion
      </button>
    </Link>
    
    
  </div>
  )
  
}

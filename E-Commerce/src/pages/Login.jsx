import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login({ setEstaAutenticado }) {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const exito = login(usuario, contraseña);
    if (exito) {
      setEstaAutenticado(true);
      localStorage.setItem("autenticado", "true");
      navigate("/"); // Redirige al home
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;

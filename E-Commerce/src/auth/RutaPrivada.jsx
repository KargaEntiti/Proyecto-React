import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaPrivada({ children }) {
  const { estaAutenticado } = useAuth();
  return estaAutenticado ? children : <Navigate to="/login" />;
}

export default RutaPrivada;
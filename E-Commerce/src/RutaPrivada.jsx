import { Navigate } from "react-router-dom";

export default function RutaPrivada({ children, estaAutenticado }) {
  console.log (estaAutenticado)
  if (!estaAutenticado) {
    console.log("paso por rutas privada")
    return <Navigate to="/login" replace />;
  }

  return children;
}

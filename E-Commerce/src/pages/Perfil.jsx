import { useEffect, useState } from "react";

function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Simulación de login persistente con localStorage
    const datosUsuario = localStorage.getItem("usuario");
    if (datosUsuario) {
      setUsuario(JSON.parse(datosUsuario));
    }
  }, []);

  if (!usuario) {
    return <p>No has iniciado sesión</p>;
  }

  return (
    <div>
      <h2>Mi Perfil</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      {/* Podés agregar más campos según tu app */}
    </div>
  );
}

export default Perfil;

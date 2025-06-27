import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const [estaAutenticado, setEstaAutenticado] = useState(
    localStorage.getItem("autenticado") === "true"
  );

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) setUsuario(JSON.parse(usuarioGuardado));
  }, []);

const login = (nombreUsuario, contraseña) => {
  let usuarioData = null;

  if (nombreUsuario === 'admin' && contraseña === '1234') {
    usuarioData = { nombre: nombreUsuario, rol: "admin" };
  } else if (nombreUsuario === 'cliente' && contraseña === '1234') {
    usuarioData = { nombre: nombreUsuario, rol: "cliente" };
  } else {
    return false;
  }

  setEstaAutenticado(true);
  setUsuario(usuarioData);
  localStorage.setItem('usuario', JSON.stringify(usuarioData));
  localStorage.setItem('autenticado', 'true');
  return true;
};

  const logout = () => {
    setUsuario(null);
    setEstaAutenticado(false);
    localStorage.removeItem("autenticado");
    localStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ estaAutenticado, usuario, setUsuario  ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

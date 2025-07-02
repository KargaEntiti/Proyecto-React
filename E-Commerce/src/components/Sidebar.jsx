import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/index.css"
import "../style/Sidebar.css";

const Sidebar = () => {
    
    const { estaAutenticado, logout, usuario } = useAuth();
    const [abierto, setAbierto] = useState(false);

    const toggleSidebar = () => {
    setAbierto(!abierto);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button className="hamburguesa" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${abierto ? "abierto" : ""}`}>
        <div className="sidebar-header">
            <img src="https://i.imgur.com/pxnct1B.png" alt="logo" className="sidebar-logo"></img>
            <button className="cerrar" onClick={toggleSidebar}>×</button>
        </div>
        <nav>
            <ul>
                {!estaAutenticado ? (
                <li>
                    <Link to="/Login" className="boton">Iniciar Sesión</Link>
                </li>
            ) : (
                <li>
                    <button className="boton" onClick={logout}>Cerrar Sesión</button>
                </li>
            )}
                <li>
                    <Link to="/" className="boton">Inicio</Link>
                    
                </li>
                <li>
                    <Link to="/Carrito" className="boton">Carrito</Link>
                    
                </li>
                <li>
                    <Link to="/About" className="boton">Acerca de</Link>
                    
                </li>
                <li>
                    <Link to="/Contact" className="boton">Contacto</Link>
                </li>
                {usuario?.rol === "admin" && (
                <>
                    <li>
                        <Link to="/NuevoProducto" className="boton">Nuevo Producto</Link> 
                    </li>
                    <li>
                        <Link to="/Productos" className="boton">Lista de Productos</Link>
                    </li>
                </>
                )}  
            </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

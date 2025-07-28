import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/index.css"
import "../style/Sidebar.css";

const Sidebar = ({abierto, toggleSidebar }) => {
    
    const { estaAutenticado, logout, usuario } = useAuth();

  return (
    <>
      {abierto && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div 
        className={`sidebar ${abierto ? "abierto" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
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
                    <Link to="/" className="boton" onClick={toggleSidebar}>Inicio</Link>
                    
                </li>
                <li>
                    <Link to="/Carrito" className="boton" onClick={toggleSidebar}>Carrito</Link>
                    
                </li>
                <li>
                    <Link to="/About" className="boton" onClick={toggleSidebar}>Acerca de</Link>
                    
                </li>
                <li>
                    <Link to="/Contact" className="boton" onClick={toggleSidebar}>Contacto</Link>
                </li>
                {usuario?.rol === "admin" && (
                <>
                    <li>
                        <Link to="/NuevoProducto#formulario" className="boton" onClick={toggleSidebar}>Nuevo Producto</Link> 
                    </li>
                    <li>
                        <Link to="/Productos#lista" className="boton" onClick={toggleSidebar}>Lista de Productos</Link>
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

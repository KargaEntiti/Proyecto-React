// src/components/FormularioAgregarProducto.jsx
import { useState } from "react";
import axios from "axios";

const API_URL = 'https://681e5159c1c291fa6633c1ac.mockapi.io/api/v1/productos/productos';

const FormularioAgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  const validar = () => {
    const errores = {};
    if (!nombre.trim()) errores.nombre = "El nombre es obligatorio";
    if (!precio || isNaN(precio) || Number(precio) <= 0)
      errores.precio = "El precio debe ser un número mayor a 0";
    if (!descripcion || descripcion.trim().length < 10)
      errores.descripcion = "La descripción debe tener al menos 10 caracteres";
    return errores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidados = validar();
    if (Object.keys(erroresValidados).length > 0) {
      setErrores(erroresValidados);
      setMensaje('');
      return;
    }

    try {
      await axios.post(API_URL, {
        nombre,
        precio: Number(precio),
        descripcion,
      });

      setMensaje("✅ Producto agregado con éxito");
      setNombre('');
      setPrecio('');
      setDescripcion('');
      setErrores({});
    } catch (error) {
      setMensaje("❌ Error al guardar en MockAPI");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        {errores.descripcion && (
          <p style={{ color: "red" }}>{errores.descripcion}</p>
        )}
      </div>

      <button type="submit">Agregar Producto</button>
      {mensaje && <p style={{ color: mensaje.includes("✅") ? "green" : "red" }}>{mensaje}</p>}
    </form>
  );
};

export default FormularioAgregarProducto;

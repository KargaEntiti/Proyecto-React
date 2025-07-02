import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductosContext";
import { toast } from 'react-toastify';
import "../style/Formulario.css"

const FormulariosProducto = ({ productoAEditar, onFinish }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});
  const [mensaje] = useState('');
  const [imagenURL, setImagenURL] = useState("");
  const [preview, setPreview] = useState("");

  const { agregarProducto, editarProducto } = useProducts();

  useEffect(() => {
    if (productoAEditar) {
      setNombre(productoAEditar.nombre);
      setPrecio(productoAEditar.precio);
      setDescripcion(productoAEditar.descripcion);
      setImagenURL(productoAEditar.imagen)
      setPreview(productoAEditar.imagen);
    }
  }, [productoAEditar]);

  const validar = () => {
    const errores = {};
    if (!nombre.trim()) errores.nombre = 'El nombre es obligatorio';
    if (!precio || isNaN(precio) || Number(precio) <= 0)
      errores.precio = 'El precio debe ser un número mayor a 0';
    if (!descripcion || descripcion.length < 10)
      errores.descripcion = 'Debe tener al menos 10 caracteres';
    return errores;
  };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagenArchivo(file);
    setImagenURL(""); // limpiamos la URL por si estaba
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview("");
    }
  };

    const handleURLChange = (e) => {
    const url = e.target.value;
    setImagenURL(url);
    setPreview(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = validar();
    if (Object.keys(val).length > 0) {
      setErrores(val);
       toast.warn('⚠️ Corrige los errores del formulario');
      return;
    }
    
    // Determinar la URL final
    let imagenFinal = "";
    if (imagenURL) {
      imagenFinal = imagenURL;
    }

    if (!imagenURL.trim()) {
     alert("Por favor ingresa la URL de la imagen.");
    return;
    }

    const productoFinal = {
      nombre,
      precio,
      descripcion,
      imagen: imagenURL,
    };

    if (productoAEditar) {
      editarProducto({ ...productoFinal, id: productoAEditar.id });
      toast.info('🛠️ Producto editado con éxito');
    } else {
      agregarProducto(productoFinal);
      toast.success('✅ Producto agregado con éxito');
    }

    setErrores({});
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setImagenURL("");
    setPreview("");
    if (onFinish) onFinish(); // Para cerrar modal, etc.
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h1>Agregar Nuevo Producto</h1>
        <div>
          <label>Nombre:</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
        </div>
        <div>
          <label>Precio:</label>
          <input value={precio} onChange={(e) => setPrecio(e.target.value)} type="number" />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          {errores.descripcion && <p style={{ color: "red" }}>{errores.descripcion}</p>}
        </div>
        <div>
          <label>Imagen (URL):</label>
          <input
            type="text"
            placeholder="https://..."
            value={imagenURL}
            onChange={handleURLChange}
          />
        </div>
        {preview && (
          <div>
            <p>Vista previa:</p>
            <img
              src={preview}
              alt="Preview"
              style={{ width: "150px", height: "auto", border: "1px solid #ccc" }}
            />
          </div>
        )}
        <button className="boton" type="submit">{productoAEditar ? 'Editar' : 'Agregar'} Producto</button>
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
      </form>
    </div>
  );
};

export default FormulariosProducto;

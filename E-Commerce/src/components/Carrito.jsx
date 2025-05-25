import { useState } from "react";

//El hook useState se usa en React para crear y manejar estados en componentes funcionales.

function Carrito({carrito,setCarrito}) {
    
    // Crea una variable de estado carrito (array vacío al principio). setCarrito se usa para actualizar ese estado.
    const [mostrarCarrito, setMostrarCarrito] = useState(false); // 🔁 controla visibilidad


     const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([])
    }
    
    return (
        <div>
            <h2>🛒 Carrito</h2>
            <button
            onClick={toggleCarrito}
            >
                {mostrarCarrito ? "Ocultar Carrito": "Ver Carrito"}
            </button>
            {mostrarCarrito && (
                <div>
                    {/*Condicional: si el carrito está vacío, muestra un mensaje.*/}
                    {carrito.length === 0 ? (
                        <p>El carrito está vacío</p>
                        
                    ) : (
                        <ul>
                            {/*Si el carrito no está vacío, muestra una lista con los nombres de los productos agregados.*/}
                            {carrito.map((item,index)=> (
                                <li key={index}>{item.nombre} - ${item.precio}</li>
                            ))}
                        </ul>
                    )}
                    <button onClick={vaciarCarrito}
                    >
                        Vaciar Carrito
                    </button>
                </div>
            )}
        </div>
    )
}

export default Carrito
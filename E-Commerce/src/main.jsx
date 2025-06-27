import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import { ProductoProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from "./context/CarritoContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductoProvider>
        <CarritoProvider>
          <ToastContainer position="top-right" autoClose={3000} />
          <App />
        </CarritoProvider>
      </ProductoProvider>
    </AuthProvider>
  </BrowserRouter>
)
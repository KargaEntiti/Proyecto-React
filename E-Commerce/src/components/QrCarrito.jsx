import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const generarTextoCarrito = (carrito, total) => {
  return carrito
    .map((item) => `• ${item.nombre} (x${item.cantidad}) - $${item.precio * item.cantidad}`)
    .join("\n") + `\n\nTotal: $${total.toFixed(2)}`;
};

const generarLinkWhatsApp = (mensaje) => {
  const numero = ""; // <- cambiar por tu número destino
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};

const QRWhatsapp = ({ carrito, total }) => {
  const mensaje = generarTextoCarrito(carrito, total);
  const linkWhatsApp = generarLinkWhatsApp(mensaje);

  return (
    <div>
      <h3>Escanea para enviar por WhatsApp</h3>
      <QRCodeCanvas value={linkWhatsApp} size={256} />
    </div>
  );
};

export default QRWhatsapp;

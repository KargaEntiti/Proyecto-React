// ProductoCard.jsx
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Titulo = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Precio = styled.p`
  color: green;
  font-weight: bold;
`;

const ProductoCard = ({ producto }) => (
  <Card>
    <Titulo>{producto.nombre}</Titulo>
    <Precio>${producto.precio}</Precio>
    <p>{producto.descripcion}</p>
  </Card>
);

export default ProductoCard;

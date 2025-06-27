import ProductoCard from './ProductoCard';
import Boton from '../style/Boton';

const ListaDeProductos = ({ productos }) => (
  <div>
    {productos.map((p) => (
      <ProductoCard key={p.id} producto={p} />
    ))}
  </div>
);
export default ListaDeProductos
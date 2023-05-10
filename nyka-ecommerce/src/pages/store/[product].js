
import { useRouter } from 'next/router';
import { getProducto } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import ItemList from '@/components/items/ItemList';

const Product1 = () => {
  const router = useRouter();
  const [productID, setProductID] = useState(null);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (router.query.product) {
      setProductID(router.query.product);
    }
  }, [router.query.product]);

  useEffect(() => {
    if (productID) {
      getProducto(productID).then((data) => setProducto(data));
    }
  }, [productID]);

  return (
    <div>
      <h1>PRODUCT</h1>
      {productID ? (
        <p>product id: {productID}</p>
      ) : (
        <p>Cargando producto...</p>
      )}
      {producto ? (
        <div>
          <h2>{producto.nombre}</h2>
        </div>
      ) : (
        <p>Cargando datos del producto...</p>
      )}
    </div>
  );
};

export default Product1;
/* El primer efecto se activa cada vez que router.query.product cambia 
(es decir, cuando el usuario navega a una nueva página de producto)
 y establece el valor de productID en el estado. El segundo efecto 
 se activa cada vez que productID cambia (es decir, cuando router.query.product cambia)
  y utiliza la función getProducto para obtener los datos del producto correspondiente al 
  productID. Una vez que se reciben los datos del producto, se establecen en el estado. 
  
  En el retorno de tu componente, utilizamos el operador ternario para mostrar un mensaje de "Cargando" mientras se obtienen los datos del producto. Cuando se reciben los datos, se muestra el nombre y la descripción del producto.
  */
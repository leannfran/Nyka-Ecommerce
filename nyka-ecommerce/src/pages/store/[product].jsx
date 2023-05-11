import { useRouter } from "next/router";
import { getProducto } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import ItemList from "@/components/items/ItemList";

const Product1 = () => {
  const router = useRouter();
  const [productID, setProductID] = useState(null);
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

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

  const agregarAlCarrito = () => {
    console.log(
      `Se ha agregado ${cantidad} unidades del producto ${producto.nombre} al carrito`
    );
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {producto ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={producto.img}
              alt={producto.name}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
            <p className="text-gray-700">{producto.size}</p>
            <p className="text-gray-700 my-2">${producto.precio}</p>
            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-3 rounded-l"
                  onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={cantidad}
                  className="text-center py-1 px-2 bg-gray-100"
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-3 rounded-r"
                  onClick={() => setCantidad(cantidad + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded"
                onClick={agregarAlCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
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

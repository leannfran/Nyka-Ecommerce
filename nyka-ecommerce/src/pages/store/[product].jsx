import { useRouter } from "next/router";
import { getProducto } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import ItemList from "@/components/items/ItemList";
import Layout from "@/components/layout/Layout";

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
    <Layout>
    <div className="flex justify-center items-center pt-28">
      {producto ? (
        <div className="flex flex-col  md:flex-row">
          <div className="flex justify-center aling-center max-h-[80vh] w-full md:w-1/2 ml-4 mb-4">
            <img
              src={producto.img}
              alt={producto.name}
              className=" aspect-w-1 aspect-h-1 object-cover"
            />
          </div>

          <div className="w-full flex flex-col justify-between md:w-1/2 pl-4 pr-28">
            <div>

            <h2 className="text-2xl text-black font-bold  mb-3">
              {producto.nombre}
            </h2>

            <p className="text-[#171513] font-light text-sm leading-8 ">
              Tamaño: {producto.size}
              <li>Podrás elegir con luz blanca fría o cálida (amarillenta).</li>
              <li>
                La imagen a personalizar se adjunta al finalizar la compra.
              </li>
            </p>

            <p className="text-2xl text-black font-bold  my-3">
              ${new Intl.NumberFormat("de-DE").format(producto.precio)}
            </p>

            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-black   bg-white hover:bg-[#622708] hover:text-white"
                >
                Elegir luz
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white w-52"
              >
                <li>
                  <a>Luz fria</a>
                </li>
                <li>
                  <a>Luz calida</a>
                </li>
              </ul>
            </div>
                </div>

            <div className="flex justify-between items-center my-4">
              <div className="flex items-center border border-black rounded-lg py-2.5">
                <button
                  className=" text-black  pl-3 rounded-l"
                  onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                >
                  -
                </button>
                <p className="text-black px-20">{cantidad}</p>
                <button
                  className=" text-black  pr-3 rounded-r"
                  onClick={() => setCantidad(cantidad + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="bg-[#622708] border border-[#622708] text-white py-2.5 px-12 font-semibold rounded-lg hover:shadow-xl transition-all"
                onClick={agregarAlCarrito}
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando datos del producto...</p>
      )}
    </div> </Layout>
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

import NavBar from "@/components/NavBar";
import { getProductsByCategory } from "@/firebase/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import Layout from "@/components/layout/Layout";

const Tienda = () => {
  const fondo1 =
    "https://firebasestorage.googleapis.com/v0/b/nyka-ecommerce.appspot.com/o/Image.png?alt=media&token=14724734-66c5-4c7c-9bae-a3b20dd3c4a7";
  const fondo2 =
    "https://firebasestorage.googleapis.com/v0/b/nyka-ecommerce.appspot.com/o/Image.png?alt=media&token=14724734-66c5-4c7c-9bae-a3b20dd3c4a7";

  const [category, setCategory] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((productsFiltered) => {
      const productsList = (
        <ItemList products={productsFiltered} plantilla={"item"} />
      );
      setProductos(productsList);
    });
  }, [category]);

  const changeCategoryAll = () => {
    setCategory("");
  };
  const changeCategoryPersonas = () => {
    setCategory("personas");
  };
  const changeCategoryEmpresas = () => {
    setCategory("empresas");
  };
  const changeCategoryInfantiles = () => {
    setCategory("infantiles");
  };
  const changeCategoryEventos = () => {
    setCategory("eventos");
  };
  const changeCategoryMore = () => {
    setCategory("more");
  };

  return (
    <Layout>
      <div className=" bg-white">
        <div className="flex justify-center items-center bg-pink-50 ">
          <h2 className="text-3xl z-10 text-white absolute">TIENDA</h2>
          <Image
            className="w-full md:w-[50%] h-64 "
            src={fondo1}
            alt="item"
            width={400}
            height={300}
          />
          <Image
            className="w-0 md:w-[50%] h-64"
            src={fondo2}
            alt="item"
            width={400}
            height={300}
          />
        </div>
        <div className="flex min-h-screen">
          <section className="md:min-w-[20%] mt-12 ml-4 pr-20">
            <p className="pl-1 pb-1 font-medium text-black text-base  border-b-[0.5px] border-[#2D2E37]">
              {" "}
              categorias
            </p>

            <ul className="flex flex-col items-start pl-1 gap-3 mt-1 text-lg text-[#2D2E37]">
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryAll}
              >
                Ver todo
              </button>
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryPersonas}
              >
                Personas
              </button>
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryInfantiles}
              >
                Infantiles
              </button>
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryEmpresas}
              >
                Empresas
              </button>
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryEventos}
              >
                Eventos
              </button>
              <button
                className=" hover:text-[#8D4925]"
                onClick={changeCategoryMore}
              >
                Mas productos
              </button>
            </ul>
          </section>
          <section className="flex flex-row flex-wrap gap-3 m-3">
            {productos}
            {/* productosfiltrados */}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Tienda;

import ItemListContainer from "@/components/items/ItemListContainer";
import NavBar from "@/components/NavBar";
import { getProductsByCategory } from "@/firebase/firebase";
import Image from "next/image";
 

const Tienda = () => {
  const fondo1 =
    "https://firebasestorage.googleapis.com/v0/b/nyka-ecommerce.appspot.com/o/Image.png?alt=media&token=14724734-66c5-4c7c-9bae-a3b20dd3c4a7";
  const fondo2 =
    "https://firebasestorage.googleapis.com/v0/b/nyka-ecommerce.appspot.com/o/Image.png?alt=media&token=14724734-66c5-4c7c-9bae-a3b20dd3c4a7";

    getProductsByCategory("infantiles")

  return (
    <div className=" bg-white">
      <NavBar />
      <div className="flex justify-center items-center bg-pink-50">
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
      <div className="flex ">
        <section className="md:min-w-[20%] mt-12 ml-4 pr-20">
          <p className="pl-1 pb-1 font-medium text-black text-base  border-b-[0.5px] border-[#2D2E37]">
            {" "}
            categorias
          </p>

          <ul className="pl-1 gap-3 mt-1 text-lg text-[#2D2E37]">
            <li>Ver todo</li>
            <li>Personas</li>
            <li>Empresas</li>
            <li>Eventos</li>
            <li>Mas productos</li>
          </ul>
        </section>
        <section>
          <ItemListContainer wrap={true} />
        </section>
      </div>
    </div>
  );
};

export default Tienda;

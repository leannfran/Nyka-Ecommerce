import React from "react";
import ItemListContainer from "../items/ItemListContainer";
import CardItem from "./CardItem";
import Link from "next/link";

const CardsContainer = () => {
  return (
    <div className="bg-white text-[#433F3F] flex flex-col gap-5 justify-center">
      <h1 className="text-center text-lg pt-10 font-bold">
        Productos destacados de nuestra tienda
      </h1>
      <div id="carrousel" className="flex overflow-x-scroll py-12">
        <div className="flex gap-4 flex-row">
          <ItemListContainer />
        </div>
      </div>
       
      <Link href={'/Tienda'} className="bg-[#8D4925] text-white p-2 rounded-md m-auto">
          Ver todos los productos
      </Link>
    </div>
  );
};

export default CardsContainer;

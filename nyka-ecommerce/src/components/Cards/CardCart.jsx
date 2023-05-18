import React from "react";
import Image from "next/image";
import item from "../../../public/Image.png";
import { IconTrashSvg } from "../Svgs";

const CardCart = () => {
  return (
    <div className="flex justify-between items-center font-medium gap-2">
     
      <div className="flex flex-row gap-2 items-center overflow-hidden">
        <Image
          src={item}
          alt="product image"
          className="rounded-md w-14 h-16 md:w-24 md:h-24"
        />
      <div className="">

        <h3>
          1x Lámparas Personalizada Pareja
        </h3>
        <p>$ 1.500</p>
        </div>
      </div>
      <div className="border px-4 rounded-md border-black flex gap-2 text-xl">
        <button className="">-</button>
        <span>0</span>
        <button className="">+</button>
      </div>
      <div className="w-10 h-10">

      <IconTrashSvg />
      </div>
    </div>
  );
};

export default CardCart;

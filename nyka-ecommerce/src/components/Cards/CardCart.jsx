
import React from 'react';
import Image from "next/image";
import item from "../../../public/Image.png";
import { IconTrashSvg } from "../Svgs";

const CardCart = () => {
  return (
    <div className="flex justify-between items-center font-medium">
    <div className="flex items-center gap-4">
      <Image
        src={item}
        width={120}
        height={120}
        alt="product image"
        className="rounded-md"
      />
      <div>
        <h3>1x Lámparas Personalizada Pareja</h3>
        <p>$ 1.500</p>
      </div>
    </div>
    <div className="border px-4 rounded-md border-black flex gap-2 text-xl">
      <button className="">-</button>
      <span>0</span>
      <button className="">+</button>
    </div>
    <IconTrashSvg />
  </div>
  );
};

export default CardCart;
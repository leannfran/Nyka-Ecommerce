import React from "react";
import Image from "next/image";
import item from "../../../public/Image.png";
import { IconTrashSvg } from "../Svgs";

const CardCart = ({quantity,title,price,category}) => {
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
          {quantity}x Lampara {title} {category}
        </h3>
        <p>$ {price}</p>
        </div>
      </div>
      <div className="w-10 h-10 cursor-pointer">

      <IconTrashSvg />
      </div>
    </div>
  );
};

export default CardCart;

import Image from "next/image";
import React from "react";
import item from "../../../public/Image.png";
import { IconBagSvg } from "../Svgs";

const CardItem = () => {
  return (
    <div className="card w-80 bg-white shadow-slate-500 border shadow-lg ml-6">
      <figure className="px-5 pt-5">
        <Image src={item} alt="item" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title">Lámpara Personalizada Infantil Mascota</h2>
        <h3 className="card-title">$000000</h3>
        <p>3 cuotas sin interés o 20%off en transferencia</p>
        <div className="card-actions">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8D4925]">
            <IconBagSvg color="white"/>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CardItem;

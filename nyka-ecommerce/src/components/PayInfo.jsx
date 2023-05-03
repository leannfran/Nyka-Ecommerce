import Image from "next/image";
import React from "react";
import item from "../../public/Image.png";
import { IconMoneySvg, IconMpSvg } from "./Svgs";

const PayInfo = () => {
  return (
    <div className="bg-[#f3e5dd] text-[#622708] font-semibold mt-10">
      <div className="flex">
        <Image src={item} alt="lamp photo" className="w-1/2" />
        <Image src={item} alt="lamp photo" className="w-1/2" />
      </div>
      <div className="w-full p-4 flex flex-col gap-4">
        <h2>Envíos a todo el país a travez de Mercado Envíos</h2>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <IconMoneySvg />
          </div>

          <h2>3 cuotas sin interés o 20% off en transferencia bancaria</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <IconMpSvg />
          </div>

          <h2>Aceptamos todos los medios de pago</h2>
        </div>
      </div>
    </div>
  );
};

export default PayInfo;

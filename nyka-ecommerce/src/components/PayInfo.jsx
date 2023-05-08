import Image from "next/image";
import React from "react";
import item from "../../public/Image.png";
import { IconDeliverySvg, IconMoneySvg, IconMpSvg } from "./Svgs";

const PayInfo = () => {
  return (
    <div className="bg-[#f3e5dd] text-[#622708] font-semibold xl:text-2xl mt-10 md:h-60 xl:h-[400px] md:flex">
      <div className="flex md:w-4/5">
        <Image src={item} alt="lamp photo" className="w-1/2 object-cover" />
        <Image src={item} alt="lamp photo" className="w-1/2 object-cover" />
      </div>
      <div className="w-full flex flex-col items-start p-5 md:p-12 justify-evenly gap-5 md:gap-4">
      <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <IconDeliverySvg />
          </div>

          <h2>Envíos a todo el país a través de Mercado Envíos</h2>
        </div>
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

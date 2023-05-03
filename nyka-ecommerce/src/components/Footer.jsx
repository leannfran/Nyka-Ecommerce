import React from "react";
import visa from "../../public/assets/Payment methods/Image-1.png";
import master from "../../public/assets/Payment methods/Image-2.png";
import pagoFacil from "../../public/assets/Payment methods/Image-3.png";
import rapiPago from "../../public/assets/Payment methods/Image-4.png";
import nativa from "../../public/assets/Payment methods/Image-5.png";
import americanExpress from "../../public/assets/Payment methods/Image-6.png";
import shopping from "../../public/assets/Payment methods/Image-7.png";
import banelco from "../../public/assets/Payment methods/Image-8.png";
import Image from "next/image";
import { LogoInstaSvg, LogoMailSvg, LogoWspSvg } from "./Svgs";

const Footer = () => {
  return (
    <div className="bg-[#f3e5dd] mt-16 p-5 flex flex-col gap-8 text-[#622708]">
      <div className="flex gap-2 justify-center">
        <Image src={visa} alt="pay-method" />
        <Image src={master} alt="pay-method" />
        <Image src={pagoFacil} alt="pay-method" />
        <Image src={rapiPago} alt="pay-method" />
        <Image src={nativa} alt="pay-method" />
        <Image src={americanExpress} alt="pay-method" />
        <Image src={shopping} alt="pay-method" />
        <Image src={banelco} alt="pay-method" />
      </div>
      <div className="flex items-center gap-2 justify-evenly">
        <div className="p-2 rounded-md bg-[#EFD1C1]">
          <LogoInstaSvg />
        </div>

        <div className="p-2 rounded-md bg-[#EFD1C1]">
          <LogoWspSvg />
        </div>

        <div className="p-2 rounded-md bg-[#EFD1C1]">
          <LogoMailSvg />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[8px] font-semibold">
          ©️COPYRIGHT SOMOS NYKA 2023. TODOS LOS DERECHOS RESERVADOS.{" "}
        </p>
        <p className="text-[8px] font-semibold">
          Creado por <span className="font-extrabold">FUTURE</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

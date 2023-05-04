import React from "react";
import { IconHandSvg, IconMedalSvg, IconQualitySvg } from "./Svgs";

const Why = () => {
  return (
    <section className="bg-[#f3e5dd] flex flex-col md:flex-row items-center md:justify-center text-[#433F3F] p-8 gap-4 md:h-[400px] lg:px-32">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-extrabold lg:font-bold text-3xl lg:text-5xl text-center">
          ¿Por qué elegir nuestro producto?
        </h1>
        <button className="bg-[#8D4925] text-white w-44 p-2 rounded-md hidden md:block mt-8">
          Explorá nuestra tienda
        </button>
      </div>
      <div className="flex h-full gap-4 md:flex-col md:gap-0 md:justify-evenly ">
        <IconQualitySvg />
        <IconHandSvg />
        <IconMedalSvg />
      </div>
      <div className="flex flex-col gap-4">
        
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl ">
            Productos fabricados con la mejor calidad
          </h3>
          <p className="font-normal text-sm">
            Nosotros priorizamos a nuestros clientes brindando la mejor calidad
            a nuestros productos.
          </p>
          <div className="h-[.5px] w-full bg-[#8D4925]"></div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl ">Hecho a mano</h3>
          <p className="font-normal text-sm">
            Nuestras lámparas son fabricadas a mano con bases de madera y se
            encienden con interruptor ON/OFF. Los diseños son creados
            manualmente
          </p>
          <div className="h-[.5px] w-full bg-[#8D4925]"></div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl ">Industria nacional</h3>
          <p className="font-normal text-sm">
            Somos una empresa argentina, por lo tanto ofrecemos las lámparas con
            mayor nivel de detalle en el mercado.
          </p>
          <div className="h-[.5px] w-full bg-[#8D4925]"></div>
        </div>
      </div>
      <button className="bg-[#8D4925] text-white w-44 p-2 rounded-md md:hidden">
        Explorá nuestra tienda
      </button>
    </section>
  );
};

export default Why;

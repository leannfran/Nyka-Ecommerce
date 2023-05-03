import React from "react";
import { IconQualitySvg } from "./Svgs";

const Why = () => {
  return (
    <section className="bg-[#f3e5dd] flex flex-col items-center text-[#433F3F] p-8 gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-extrabold text-3xl text-center">
          ¿Por qué elegir nuestro producto?
        </h1>
      </div>
      <IconQualitySvg/>
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
      <button className="bg-[#8D4925] text-white w-44 p-2 rounded-md">
        Explorá nuestra tienda
      </button>
    </section>
  );
};

export default Why;

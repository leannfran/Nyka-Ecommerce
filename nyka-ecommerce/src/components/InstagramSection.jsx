import React from "react";
import CardInstagram from "./cards/CardInstagram";
import { LogoInstagramSvg } from "./Svgs";

const InstagramSection = () => {
  return (
    <div className="my-52">
      <div className="flex items-center gap-3 justify-center my-12">
        <LogoInstagramSvg/>
        <h2 className="text-[#8D4925] text-2xl font-bold">@somosnyka</h2>
      </div>
      <div className="flex flex-col gap-5 items-center md:flex-row justify-center lg:justify-evenly">
        <CardInstagram />
        <CardInstagram />
        <CardInstagram />
      </div>
    </div>
  );
};

export default InstagramSection;

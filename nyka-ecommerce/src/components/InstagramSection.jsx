import React from "react";
import CardInstagram from "./Cards/CardInstagram";
import { LogoInstagramSvg } from "./Svgs";

const InstagramSection = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 justify-center my-6">
        <LogoInstagramSvg/>
        <h2 className="text-[#8D4925] text-lg font-bold">@somosnyka</h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <CardInstagram />
        <CardInstagram />
        <CardInstagram />
      </div>
    </div>
  );
};

export default InstagramSection;

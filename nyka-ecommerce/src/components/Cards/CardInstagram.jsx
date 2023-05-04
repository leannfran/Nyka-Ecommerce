import Image from "next/image";
import React from "react";
import item from "../../../public/Image.png";
import { IconCommentSvg, IconHeartSvg } from "../Svgs";

const CardInstagram = () => {
  return (
    <div className="bg-[#f3e5dd] rounded-2xl w-[252px] h-[320px] lg:h-[505px] lg:w-[352px] flex flex-col justify-evenly items-center text-[#8D4925] font-semibold">
      <Image src={item} alt="item" className="w-[206px] h-[250px] lg:h-[414px] lg:w-[306px] object-cover" />
      <div className="flex justify-around  w-full">
        <div className="flex gap-2">
           <IconHeartSvg/>
          <span>123</span>
        </div>

        <div className="flex gap-2">
          <IconCommentSvg/>
          <span>123</span>
        </div>
      </div>
    </div>
  );
};

export default CardInstagram;

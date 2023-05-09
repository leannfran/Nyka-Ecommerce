import Image from "next/image";
import React from "react";
import { IconBagSvg } from "../Svgs";
import img from "../../../public/Image.png";
import Link from "next/link";

const Item = ({ item }) => {
  return (
    <Link href={`/item/${item.id}`}>
    <div>
      <div className="card w-80 bg-white shadow-xl">
        <figure className="">
          
          <Image src={img} alt="item" className="rounded-t-xl" />
        </figure>
        <div className="flex flex-col gap-2 my-4 items-center text-center text-black">
          <h2 className="card-title text-base">{item.nombre}</h2>
          <h3 className="card-title text-lg">${new Intl.NumberFormat("de-DE").format(item.precio)}</h3>
          <p className=" text-xs  text-gray-800 ">3 cuotas sin interés o 20%off en transferencia</p>
          <div className="card-actions">
            <button className="w-12 h-12 mt-[4px] flex items-center justify-center rounded-full bg-[#8D4925]">
              <IconBagSvg color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Item;

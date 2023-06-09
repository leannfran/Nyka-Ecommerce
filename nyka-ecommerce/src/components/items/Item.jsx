import Image from "next/image";
import { useState } from "react";
import { IconBagSvg } from "../Svgs";
import img from "../../../public/Image.png";
import Link from "next/link";
import MyLoader from "../itemLoader";

const Item = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? (
        <Link href={`/store/${item.id}`}>
          <div>
            <div className="card w-80   bg-white shadow-xl">
              <figure className="">
                <img
                  src={`${item.img}`}
                  alt="item"
                  className="w-80 max-h-64 aspect-w-1 aspect-h-1 object-cover rounded-t-xl"
                  onLoad={() => setLoaded(true)}
                />
              </figure>
              <div className="flex flex-col gap-2 my-4 items-center text-center text-black">
                <h2 className="card-title text-base">{item.nombre}</h2>
                <h3 className="card-title text-lg">
                  ${new Intl.NumberFormat("de-DE").format(item.precio)}
                </h3>
                <p className=" text-xs  text-gray-800 ">
                  3 cuotas sin interés o 20%off en transferencia
                </p>
                <div className="card-actions">
                  <button className="w-12 h-12 mt-[4px] flex items-center justify-center rounded-full bg-[#8D4925]">
                    <IconBagSvg color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <>
          <MyLoader />
          <img
            src={`${item.img}`}
            alt="item"
            className="w-80 -z-10 absolute max-h-64 aspect-w-1 aspect-h-1 object-cover rounded-t-xl"
            onLoad={() => setLoaded(true)}
          />
        </>
      )}
    </>
  );
};

export default Item;

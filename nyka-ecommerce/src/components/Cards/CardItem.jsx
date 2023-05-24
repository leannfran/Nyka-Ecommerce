import Image from "next/image";
import {useState} from "react";
import item from "../../../public/Image.png";
import { IconBagSvg } from "../Svgs";
import MyLoader from "../itemLoader";
import Link from "next/link";


const CardItem = ({title,price,description,img,id}) => {
  const [loaded, setLoaded] = useState(false);
  return  (
    <>
      {loaded ? (
        <Link href={`/store/${id}`}>
         
            <div className="card w-80 bg-white shadow-xl hover:shadow-2xl transition-all min-h-[470px] mx-4 lg:mx-12">
              <figure className="">
                <img
                  src={`${img}`}
                  alt="item"
                  className="w-80 max-h-64 aspect-w-1 aspect-h-1 object-cover rounded-t-xl"
                  onLoad={() => setLoaded(true)}
                />
              </figure>
              <div className="flex flex-col gap-2 my-4 items-center text-center text-black">
                <h2 className="card-title text-base">{title}</h2>
                <h3 className="card-title text-lg">
                  ${new Intl.NumberFormat("de-DE").format(price)}
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
        
        </Link>
      ) : (
        <>
          <MyLoader />
          <img
            src={`${img}`}
            alt="item"
            className="w-80 -z-10 absolute max-h-64 aspect-w-1 aspect-h-1 object-cover rounded-t-xl"
            onLoad={() => setLoaded(true)}
          />
        </>
      )}
    </>
  );
};

export default CardItem;

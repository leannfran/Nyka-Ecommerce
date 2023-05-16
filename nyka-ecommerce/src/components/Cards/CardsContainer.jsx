import React from "react";
import CardItem from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getProductos } from "@/firebase/firebase";
import Link from "next/link";

const CardsContainer = () => {
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    getProductos().then((products) => {
      setProductos(products);
    });
  }, []);


  return (
    <div className="bg-white text-[#433F3F] flex flex-col gap-5 justify-center">
      <h3 className="text-center text-lg pt-10 font-bold">
        Productos destacados de nuestra tienda
      </h3>
      <div>
        <Swiper
          className="h-[570px]"
          modules={[]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            436: {
              slidesPerView: 1.2,
            },
            600: {
              slidesPerView: 1.5,
            },
            730: {
              slidesPerView: 2,
            },
            919: {
              slidesPerView: 2.5,
            },
            1084: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3.5,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
          style={{ position: "unset" }}
        >
          {productos.map((product) => (
            <SwiperSlide key={product.id}>
              <CardItem title={product.nombre} price={product.precio} img={product.img} id={product.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            

      <Link href='../store' className="bg-[#8D4925] text-white p-2 rounded-md m-auto">
        Ver todos los productos
      </Link>
    </div>
  );
};

export default CardsContainer;

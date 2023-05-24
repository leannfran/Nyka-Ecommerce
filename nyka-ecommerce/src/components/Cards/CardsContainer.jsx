import React from "react";
import CardItem from "../Cards/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getProductos } from "@/firebase/firebase";
import Link from "next/link";
import Button from "../buttons/Button";
import CardSwiper from "./CardSwiper";

const CardsContainer = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProductos().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="bg-white text-[#433F3F] flex flex-col gap-5 justify-center">
      <div>
        <CardSwiper
          title="Productos destacados de nuestra tienda"
          products={products}
        />
      </div>

      <Button content="VER TODOS LOS PRODUCTOS" link direction="/store" color/>
    </div>
  );
};

export default CardsContainer;

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardItem from "../cards/CardItem";

export default function CardSwiper({ products ,title}) {
  return (
    <div>
      <h3 className="text-center md:text-lg p-2 font-bold border-b border-[#8D4925] w-fit m-auto my-10">
      {title}
        </h3>
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
            slidesPerView: 2.2,
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardItem
              title={product.nombre}
              price={product.precio}
              img={product.img}
              id={product.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

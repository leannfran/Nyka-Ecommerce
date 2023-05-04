
import Image from 'next/image';
import React from 'react';
import lampara from '../../public/Image.png'

const Carrousel = () => {
  return (
    <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px] 2xl:h-[620px]  object-cover" alt=""/>
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px] 2xl:h-[620px]  object-cover hidden lg:block" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px]  2xl:h-[620px] object-cover" alt=""/>
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px]  2xl:h-[620px] object-cover hidden lg:block" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px]  2xl:h-[620px] object-cover" alt=""/>
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px]  2xl:h-[620px] object-cover hidden lg:block" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <Image src={lampara} className="w-full md:h-[600px]  lg:h-[400px] 2xl:h-[620px] object-cover" alt=""/>
    <Image src={lampara} className="w-full md:h-[600px] lg:h-[400px]  2xl:h-[620px] object-cover hidden lg:block" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Carrousel;
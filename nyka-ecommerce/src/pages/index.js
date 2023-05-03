import Image from 'next/image'
import { getProductos, getProducto } from '@/firebase/firebase'
import ItemListContainer from '@/components/ItemListContainer'
import CardsContainer from "@/components/Cards/CardsContainer";
import Carrousel from "@/components/Carrousel";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import NavBar from "@/components/NavBar";
import PayInfo from "@/components/PayInfo";
import Why from "@/components/Why";

export default function Home() {
getProductos()
getProducto("2F3kA5WKoQMLfO3joJ5G")
  return (
    <div className="">
      <div className="relative">
        
        <Carrousel />
        <div className="absolute top-0 w-full">
          <NavBar />
        </div>
      </div>
      <Why/>
      <CardsContainer/>
      <PayInfo/>
      <InstagramSection/>
      <Footer/>
    </div>
  );
}

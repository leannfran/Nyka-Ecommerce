import CardsContainer from "../components/cards/CardsContainer";
import Carousel from "@/components/Carousel";
import InstagramSection from "@/components/InstagramSection";
import Layout from "@/components/layout/Layout";
import PayInfo from "@/components/PayInfo";
import Why from "@/components/Why";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Why />
      <CardsContainer />
      <PayInfo />
      <InstagramSection />
      
    </Layout>
  );
}

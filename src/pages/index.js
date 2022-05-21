import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import  Hero  from "../../components/hero/Hero";
import Collections from "../../components/collections/Collections";
import Category from "../../components/category/Category";
import Offers from "../../components/offers/Offers";
import Arrivals from "../../components/arrivals/Arrivals";
import Blog from "../../components/blog/Blog";
import Benefits from "../../components/benefits/Benefits";
import Footer from "../../components/footer/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Collections/>
      <Category/>
      <Offers/>
      <Arrivals/>
      <Blog/>
      <Benefits/>
      {/* <Footer/> */}

     
     
    </div>
  );
}

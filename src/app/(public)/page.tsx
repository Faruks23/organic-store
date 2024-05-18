import FlashSale from "@/Components/Flash-Sale/FlashSale";
import BrandLogo from "@/Components/Home/Brand-logo/BrandLogo";
import Hero from "@/Components/Home/Hero/Hero";
import PopularProduct from "@/Components/Home/Most-Popular-product/PopularProduct";
import TopCategory from "@/Components/Home/TopCategory/TopCategory";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <FlashSale></FlashSale>
      <TopCategory></TopCategory>
      <PopularProduct></PopularProduct>
      <BrandLogo></BrandLogo>
   </main> 
  );
}

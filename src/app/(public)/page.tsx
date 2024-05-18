import FlashSale from "@/Components/Flash-Sale/FlashSale";
import BrandLogo from "@/Components/Home/Brand-logo/BrandLogo";
import Hero from "@/Components/Home/Hero/Hero";
import PopularProduct from "@/Components/Home/Most-Popular-product/PopularProduct";
import TopCategory from "@/Components/Home/TopCategory/TopCategory";

const Home =  () => {
  
  // const res = await fetch("https://pro-store-server.vercel.app/products", {
  //   next: {
  //     revalidate: 30,
  //   }
  // })
  // const data = await res.json();

  return (
    <main className="">
      <Hero></Hero>
      <FlashSale ></FlashSale>
      <TopCategory></TopCategory>
      <PopularProduct></PopularProduct>
      <BrandLogo></BrandLogo>
   </main> 
  );
}


export default Home;
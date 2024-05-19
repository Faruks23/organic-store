"use client"

import CountDown from '@/Components/CountDown/CountDowen';
import useProducts, { productType } from '@/Components/Hooks/useProduct';
import Card from '@/Components/common/Card/Card';
import Title from '@/Components/common/Title';
import React from 'react';

const FlashSalePage =  () => {
  
  const initialTime = new Date().getTime() + 3196400000;

  // const res = await fetch("https://pro-store-server.vercel.app/products")
  // const data = await res.json();
  // if (!data) {
  //   return <p>Loading....</p>
  // }
  const { data, isLoading, error } = useProducts()
  
  if (isLoading) {
    return <p>Loading....</p>
  }


  return (
    <div className=' py-32'>
      <div className="container mx-auto">
        <div className="hero">
          <CountDown initialTime={initialTime}></CountDown>
        </div>
        <div className="flash-sale-head">
          <Title title='Flash Sale'></Title>
          <h3 className='font-bold  mt-8' >Showing 1–12 of 24 item(s)</h3>
          <p className=' text-[#949494]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8 mt-8">
          
          {data.map((products:productType) => {
            return (

              <>
                <Card product={products} key={products.id}></Card>
              </>

            )
          })}
        </div>
     </div>
    </div>
  );
};

export default FlashSalePage;
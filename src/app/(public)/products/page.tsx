
import { productType } from '@/Components/Hooks/useProduct';
import Card from '@/Components/common/Card/Card';
import Title from '@/Components/common/Title';
import React from 'react';

const ProductPage =async () => {

  const ProductRes = await fetch("https://pro-store-server.vercel.app/products", {
    next: {
      revalidate: 30,
    }
  })
  const data = await ProductRes.json();


  const res = await fetch("https://pro-store-server.vercel.app/brands")
  const brands = await res.json();
  
  if (!data && !brands) {
    return <p>Loading...</p>
  }

  return (
    <div className=' py-32'>
      <div className="container mx-auto">
        <div className="flash-sale-head">
          <Title title='Our Collection Of Products'></Title>
          <h3 className='font-bold  mt-8' >Showing 1–12 of 24 item(s)</h3>
          <p className=' text-[#949494]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="product-container flex gap-8  mt-8">
          <div className="left-filter w-[20%]  sticky z-10 top-0 left-0 flex flex-col gap-5 cursor-pointer">
            {/* price filter */}
            <div className="price-filter py-[40px] px-[30px] border">
              <h1 className='  text-[22px] font-semibold'>Price Range</h1>
              <div className="list mt-[22px] flex flex-col gap-3">
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
              </div>
            </div>
            {/* category filter */}
            <div className="price-filter py-[40px] px-[30px] border">
              <h1 className='  text-[22px] font-semibold'>Category/Brand</h1>
              <div className="list mt-[22px] flex flex-col gap-3">
               
                {
                  brands.map((brand:any) => {
                    return (
                      <>
                        <div className="flex gap-[10px] items-center">
                          <input type="checkbox" name="check" id="" />
                          <label className=' font-normal text-[#414141]'>{ brand.name}</label>
                        </div>
                      </>
                    )
                  })
                 }
               
              </div>
            </div>
            {/* rating filter */}
            <div className="price-filter py-[40px] px-[30px] border">
              <h1 className='  text-[22px] font-semibold'>Rating</h1>
              <div className="list mt-[22px] flex flex-col gap-3">
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> 1 Star</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> 2 Star</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> 3 Star</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'>4 Start</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'>5 Start</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  w-[80%]">

            {data.map((products:productType) => {
              return (

                <>
                  <Card product={products} key={products._id}></Card>
                </>

              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
import React from 'react';
import Discount from '../Discount';
import Link from 'next/link';

const Card = ({product}:{product:any}) => {
  return (
    <Link href={{pathname:`/products/${product._id}`,query:{slug:product.name}}}>
      <div className=''>
        <div className="card card-compact  md:h-[400px] bg-base-100  relative border">
          <figure><img src={product.image} alt="Shoes" className=' h-[360px]  w-full  object-scale-down ' /></figure>
          <div className="card-body">
            <h2 className="card-title">{product?.name}</h2>

            <div className="card-actions  justify-between ">
              <div>
                <p className='font-normal text-[#000000]'><span className='text-gray-500 line-through font-normal mr-2 '> ${product.discounted_price} </span > ${product.price} </p>
              </div>
              <div className='w-[21px] h-[21px] rounded-full border flex justify-center  items-center font-semibold   border-gray-500 cursor-pointer hover:scale-110 duration-200'>
                +
              </div>
            </div>
          </div>
          <div className="discount absolute top-4 left-4 z-10">
            <Discount value='10'></Discount>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
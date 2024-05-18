import Title from '@/Components/common/Title';
import ViewButton from '@/Components/common/ViewButton';
import { brands } from '@/Components/data/brand';

import React from 'react';

const TopCategory = () => {

  return (
    <div className='my-[100px]'>
      <div className='container mx-auto'>
        <div className="top-category-head text-center">
          <Title title='Top Categories'></Title>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        </div>
        <div className="category-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-[20px] gap-4 md:gap-5 mt-[70px]">
          {brands.slice(0,4).map(brand => {
            return <>
              <div className="card border h-[300px] ">
                <figure><img src={brand.logo} alt="Shoes" className=' object-cover w-full h-full' /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {brand.name}
                  </h2>
                </div>
              </div>
            </>
          })}


          
          

        </div>

        <div className="view-all  mt-[70px] flex justify-center items-center">
          <ViewButton  title='View All'></ViewButton>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
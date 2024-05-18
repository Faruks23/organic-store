import React from 'react';

const Discount = ({value}:{value:string}) => {
  return (
    <p className='!py-[3px] !px-[9px] rounded-[3px]  bg-[#f57207] text-white'>
     -{value }% 
    </p>
  );
};

export default Discount;
import Image from 'next/image';
import React from 'react';

const BrandLogo = () => {
  return (
    <div className='mt-[100px]'>
      <div className="brand-logo bg-[#6666661A]">
        <div className="container mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-[5vw]    justify-items-center  items-center py-[56px]">
          <Image  src={'/shefinds-logo 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/yahoo-img 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/Healthline-img 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/yahoo-img 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/MSN-logo 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/Healthline-img 1.png'} width={64} height={24} alt='brandlogo'></Image>
          <Image  src={'/yahoo-img 1.png'} width={64} height={24} alt='brandlogo'></Image>
          
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
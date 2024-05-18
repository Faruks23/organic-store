import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ViewButton = ({title,path}:{title:string,path?:string}) => {
  return (
    <Link href={path || '/'}>
      <button className=' px-[24px] py-3  rounded-[64px] bg-orange-500 text-xl  leading-[27px] text-center text-white flex justify-between !items-center gap-2 ' >
        {title}   <Image src={'/view.png'} width={25} height={25} alt='view'></Image>
      </button></Link>
  );
};

export default ViewButton;
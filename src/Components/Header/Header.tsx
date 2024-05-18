import Link from 'next/link';
import React from 'react';


const navList = [
  {
    name: "Home",
    path:'/',
  },
  {
    name: "Flash sell",
    path:'/flash-sale',
  },
  {
    name: "Product",
    path:'/products',
  },
  
  {
    name: "Dashboard",
    path:'/dashboard/all-product',
  },
]
const Header = () => {
  return (
    <div className='w-full  fixed top-[0px] left-0 mb-[30px]    z-50'>
      <div className="navbar   bg-white border-b py-4 w-full  px-[5vw]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navList.map((list,index) => {
                  return (
                    <>
                      <Link key={index+1} href={list.path}>
                        <li className='text-xl font-serif hover-underline-animation py-2'>{list.name}</li>
                      </Link>
                    </>
                  )
                })
              }
            </ul>
          </div>
          <p className="text-2xl font-bold italic up text-orange-500" >Organic Store</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 ">
            {
              navList.map((list, index) => {
                return (
                  <>
                    <Link key={index + 1} href={list.path}>
                      <li className={`text-xl font-serif hover-underline-animation py-2 ${index == 3 && "bg-orange-500 px-2 rounded-sm  ml-[200px] text-white"}`}>{list.name}</li>
                    </Link>
                  </>
                )
              })
            }
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Header;
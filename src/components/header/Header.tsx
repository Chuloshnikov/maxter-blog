import Image from 'next/image';
import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarMenuButton from './NavbarMenuButton';

const Header = () => {
  return (
    <header className='py-2 sticky top-0 bg-white z-50 px-2  md:px-4 xl:px-0'>
        <div className='flex justify-between items-center sticky w-full mx-auto'>
           <NavbarLinks/>
            <div className='flex gap-2'>
                <button 
                className='hidden md:block text-xl font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                >
                    Get started
                </button>
                <NavbarMenuButton/>
                
            </div>
        </div>
       
    </header>
  )
}

export default Header;
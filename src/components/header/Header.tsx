import Image from 'next/image';
import React from 'react';
import { logo } from "../../assets/images/images";
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-2'>
        <div className='flex justify-between items-center'>
            <div>
                    <Link 
                    href={"/"}
                    className='max-w-max'
                    >
                        <h1 
                        className='font-extrabold text-6xl'
                        >
                            Ma
                        <span className='text-accentBg'>X</span>
                            ter
                        </h1>
                    </Link>
            </div>
            <nav className=''>
                <ul className='flex gap-8 items-center text-xl font-medium mt-4'>
                    <li>
                        <Link 
                        href={"/"}
                        className='linkHover'
                        >
                            home
                        </Link>
                    </li>
                    <span className='w-4 h-4 bg-accentBg'></span>
                    <li>
                        <Link 
                        href={"/about"}
                        className='linkHover'
                        >
                            
                            about
                        </Link>
                    </li>
                    <span className='w-4 h-4 bg-accentBg'></span>
                    <li>
                        <Link 
                        href={"/"}
                        className='linkHover'
                        >
                            blog
                        </Link>
                    </li>
                    <span className='w-4 h-4 bg-accentBg'></span>
                    <li>
                        <Link 
                        href={"/contacts"}
                        className='linkHover'
                        >
                            
                            contacts
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <button 
                className='text-xl font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                >
                    Login
                </button>
            </div>
        </div>
       
    </header>
  )
}

export default Header;
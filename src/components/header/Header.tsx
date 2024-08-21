import Image from 'next/image';
import React from 'react';
import { logo } from "../../assets/images/images";
import Link from 'next/link';

const Header = () => {
  return (
    <header className=''>
        <div className='flex justify-center'>
            <nav>
                <ul className='flex gap-8 items-center text-xl font-medium'>
                    <li>
                        home
                    </li>
                    <li >
                        <Link 
                        href={"/"}
                        className='nax-w-max'
                        >
                            <h1 
                            className='font-extrabold text-6xl'
                            >
                                Ma
                            <span className='text-accentBg'>X</span>
                                ter
                            </h1>
                        </Link>
                    </li>
                    <li>
                        about
                    </li>
                </ul>
            </nav>
           
        </div>
       
    </header>
  )
}

export default Header;
import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarMenuButton from './NavbarMenuButton';
import {Session} from "next-auth";
import {parseFullName} from "parse-full-name";
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { PiUserSquareFill } from "react-icons/pi";
import Image from 'next/image';

const Header = ({session}:{session:Session | null}) => {
  const name = session?.user?.name || '';
  const {first:firstName} = parseFullName(name);
  console.log(name);

  return (
    <header className='py-2 max-w-contentContainer mx-auto sticky top-0 bg-white z-50 px-2  md:px-4 xl:px-0'>
        <div className='flex justify-between items-center sticky w-full mx-auto'>
           <NavbarLinks/>
            <div className='flex gap-2'>
              {session ? (
                  <div>
                    <Link 
                    href={'/profile'}
                    className='flex gap-1 items-center justify-center text-white lg:bg-accentBg lg:p-2'
                    >
                      <span className='hidden lg:block text-xl font-semibold mt-4'>{firstName || name}</span>
                      {session?.user?.image ? (
                        <Image src={session?.user?.image} width={50} height={50} className='w-[42px] h-[42px] lg:w-[30px] lg:h-[30px] mt-[6px]' alt="user"/>
                        ) : (
                        <PiUserSquareFill className='w-7 h-7'/>
                        )}
                    </Link>
                  </div>
                    ) : (
                      <Link
                      href={`/login?status=${name && 'athenticated'}`}
                      className='hidden md:block text-xl font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                      >
                          Get started
                      </Link>
                    )}
                <NavbarMenuButton status={name}/>
                
            </div>
        </div>
    </header>
  )
}

export default Header;
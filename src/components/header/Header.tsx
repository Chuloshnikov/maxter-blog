import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarMenuButton from './NavbarMenuButton';
import {Session} from "next-auth";
import {parseFullName} from "parse-full-name";
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Header = ({session}:{session:Session | null}) => {
  const name = session?.user?.name || '';
  const {first:firstName} = parseFullName(name);
  console.log(session);
  const status = session?.user;

  return (
    <header className='py-2 max-w-contentContainer mx-auto sticky top-0 bg-white z-50 px-2  md:px-4 xl:px-0'>
        <div className='flex justify-between items-center sticky w-full mx-auto'>
           <NavbarLinks/>
            <div className='flex gap-2'>
              {session ? (
                  <div>
                    {firstName}
                  </div>
                    ) : (
                      <Link
                      href={`/login?status=${status}`}
                      className='hidden md:block text-xl font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                      >
                          Get started
                      </Link>
                    )}
               
                <NavbarMenuButton status={status}/>
                
            </div>
        </div>
       
    </header>
  )
}

export default Header;
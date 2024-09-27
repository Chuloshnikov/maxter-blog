"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';


const NavbarLinks: React.FC = () => {
  const path = usePathname();
  const [windowWidth, setWindowWidth] = useState<number | undefined | null>(undefined);
  const [activeHash, setActiveHash] = useState<string>("");
  console.log(activeHash);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'null') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      const handleHashChange = () => setActiveHash(window.location.hash);
      window.addEventListener('hashchange', handleHashChange);

      // Set initial hash when component mounts for /#about hash listing
      setActiveHash(window.location.hash);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  useEffect(() => {
    if (!activeHash.includes('#about')) {
      setActiveHash("");
    }
  }, [activeHash]);

  return (
    <nav className=''>
      {windowWidth !== undefined && windowWidth >= 960 && (
        <ul className='flex gap-8 items-center text-xl font-medium mt-4'>
          <li className='-mt-4'>
            <Link 
              href={"/"}
              className='max-w-max'
            >
              <h1 className='font-extrabold text-6xl'>
                Ma
                <span className='text-accentBg'>X</span>
                ter
              </h1>
            </Link>
          </li>
          
          <li>
            <Link 
              href={"/"}
              className={path === '/' && activeHash === '' ? 'activeLink' : 'linkHover'}
            >
              home
            </Link>
          </li>
          <span className='w-4 h-4 bg-accentBg'></span>
          <li>
            <Link
              href={"/#about"}
              className={activeHash.includes('#about') ? 'activeLink' : 'linkHover'}
            >
              about
            </Link>
          </li>
          <span className='w-4 h-4 bg-accentBg'></span>
          <li>
            <Link 
              href={"/blog"}
              className={path.includes('/blog') ? 'activeLink' : 'linkHover'}
            >
              blog
            </Link>
          </li>
          <span className='w-4 h-4 bg-accentBg'></span>
          <li>
            <Link 
              href={"/contacts"}
              className={path.includes('/contacts') ? 'activeLink' : 'linkHover'}
            >
              contacts
            </Link>
          </li>
        </ul>
      )}
      {windowWidth !== undefined && windowWidth < 960 && (
        <ul className='items-center text-lg font-medium mt-4'>
          <li className='-mt-4'>
            <Link 
              href={"/"}
              className='max-w-max'
            >
              <h1 className='font-extrabold text-5xl'>
                Ma
                <span className='text-accentBg'>X</span>
                ter
              </h1>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarLinks;
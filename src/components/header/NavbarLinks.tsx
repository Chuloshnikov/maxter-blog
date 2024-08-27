"use client"
import Link from "next/link";
import { useEffect, useState} from 'react';


const NavbarLinks = () => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        setWindowWidth(window?.innerWidth);
    }, []);
  return (
    <nav className=''>
        {windowWidth: >= 960 && (
             <ul className='flex gap-8 items-center text-xl font-medium mt-4'>
             <li className='-mt-4'>
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
             </li>
             
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
        )}
         {windowWidth < 960 && (
            <ul className='items-center text-lg font-medium mt-4'>
                <li className='-mt-4'>
                    <Link 
                    href={"/"}
                    className='max-w-max'
                    >
                        <h1 
                        className='font-extrabold text-5xl'
                        >
                            Ma
                        <span className='text-accentBg'>X</span>
                            ter
                        </h1>
                    </Link>
                </li>
            </ul>
         )}
</nav>
  )
}

export default NavbarLinks;
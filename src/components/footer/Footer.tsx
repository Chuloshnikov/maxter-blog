import Link from 'next/link';
import React from 'react'
import GetInTouchForm from './GetInTouchForm';

const Footer = () => {
  return (
    <div className='bg-accentBg text-white'>
        <div className='max-w-contentContainer mx-auto pt-12 pb-20 px-8'>
            <div className='flex flex-col items-center justify-center lg:flex-row gap-8 lg:justify-between'>
                <GetInTouchForm/>
                <div className='flex-col gap-2 text-center items-center justify-between flex-grow hidden lg:flex'>
                    <div className='flex gap-1 text-center'>
                        <h2 className='font-extrabold text-black text-4xl'>
                            Ma
                        <span className='text-white'>X</span>
                            ter
                        </h2>
                        <p className='text-4xl font-semibold'>
                            Blog
                        </p>
                    </div>
                    <p className='text-sm'> &copy; Maxter blog. All Rights Reserved 2024 </p>
                </div>
                <div className='flex mx-16 items-center justify-center'>
                    <ul className='flex gap-4 lg:flex-col lg:gap-2'>
                        <li className='hover:text-black duration-200'>
                            <Link href={'/'}>home</Link>
                        </li>
                        <li className='hover:text-black duration-200'>
                            <Link href={'/#about'}>about</Link>
                        </li>
                        <li className='hover:text-black duration-200'>
                            <Link href={'/blog'}>blog</Link>
                        </li>
                        <li className='hover:text-black duration-200'>
                            <Link href={'/contacts'}>contacts</Link>
                        </li>
                    </ul>
                </div>
                {/*MOBILE COPYRIGHT*/}
                <div className='flex flex-col gap-2 mt-16 text-center items-center justify-between flex-grow lg:hidden'>
                    <div className='flex gap-1'>
                        <h2 className='font-extrabold text-black text-4xl'>
                            Ma
                        <span className='text-white'>X</span>
                            ter
                        </h2>
                        <p className='text-4xl font-semibold'>
                            Blog
                        </p>
                    </div>
                    <p className='text-sm'> &copy; Maxter blog. All Rights Reserved 2024 </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
import Link from 'next/link';
import React from 'react'
import GetInTouchForm from './GetInTouchForm';

const Footer = () => {
  return (
    <div className='bg-accentBg text-white'>
        <div className='max-w-contentContainer mx-auto pt-12 pb-20 px-8'>
            <div className='flex gap-4 justify-between'>
                <GetInTouchForm/>
                <div className='flex flex-col gap-2 text-center items-center justify-between'>
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
                <div className='px-4'>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link href={'/'}>home</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>about</Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>blog</Link>
                        </li>
                        <li>
                            <Link href={'/contacts'}>contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
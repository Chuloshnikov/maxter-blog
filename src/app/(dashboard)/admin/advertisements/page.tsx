import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Advertisements() {
  return (
    <div className='flex flex-col gap-4 justify-between'>
        <Link 
        className="flex items-center justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
        href={'/admin/advertisements/new'}
        >
          <div className="flex gap-2 items-center">
              <span>Create new advertisement</span>
              <FaArrowRight />
          </div>
        </Link>
        <div className='flex gap-16 flex-wrap max-w-screen'>
          <div className='flex flex-col gap-2 p-1 max-w-[300px] text-center items-center justify-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>

          <div className='flex flex-col gap-2 p-1 max-w-[300px] text-center items-center justify-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>

          <div className='flex flex-col gap-2 p-1 max-w-[300px] text-center items-center justify-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
          <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
              <div className='advertContainer w-[295px] h-[295px]'>

              </div>
              <p className='text-lg font-medium'>
                  Contact the site administrator for more detailed information
              </p>
          </div>
        </div>
    </div>
  )
}

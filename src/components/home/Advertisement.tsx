"use client"
import React, {useState} from 'react';

const Advertisement = () => {
    const [advert, setAdvert] = useState(null);

  return (
    <article className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12'>
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
        <div className='flex flex-col gap-2 p-1 max-w-[295px] text-center'>
            <div className='advertContainer w-[295px] h-[295px]'>

            </div>
            <p className='text-lg font-medium'>
                Contact the site administrator for more detailed information
            </p>
        </div>
    </article>
  )
}

export default Advertisement;
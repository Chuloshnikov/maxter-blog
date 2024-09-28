"use client"
import React, {useState} from 'react';

const AsideAdvertisement = () => {
    const [advert, setAdvert] = useState(null);

  return (
    <article className='flex flex-col gap-2'>
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

export default AsideAdvertisement;
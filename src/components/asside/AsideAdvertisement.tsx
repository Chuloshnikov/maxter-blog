"use client"
import { getRandomAdvertisements } from '@/actions/advertisementActions';
import { AdvertisementProps } from '@/models/Advertisement';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

const AsideAdvertisement = () => {
    const [advert, setAdvert] = useState<AdvertisementProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAdvertisements = async () => {
            setLoading(true);
            const advertisements = await getRandomAdvertisements();
            setAdvert(advertisements);
            setLoading(false);
        };
        
        fetchAdvertisements();
    }, []);

  return (
    <article className='flex gap-5 flex-wrap xl:flex-col'>
        {advert && advert?.map((item: AdvertisementProps, index: number) => (
            <Link
            key={index}
            href={item.websiteUrl} 
            className='relative flex flex-col gap-2 p-1 max-w-[300px] 
            text-center items-center justify-center border border-gray-400 group'
            >
                {item.coverUrl ? (
                   <Image src={item.coverUrl} 
                   width={1024} 
                   height={1024} 
                   className='w-[295px] h-[295px] object-contain' 
                   alt='advertisement image'
                   />
                ) : (
                    <div className='advertContainer w-[295px] h-[295px]'>
                    </div>
                )}
                <p className='text-lg font-medium'>
                    {item.title}
                </p>
            </Link>
        ))}
         {loading && (
            <div>
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
         )}
    </article>
  )
}

export default AsideAdvertisement;
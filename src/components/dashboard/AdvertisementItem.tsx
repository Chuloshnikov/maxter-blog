import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const AdvertisementItem = ({ item }: AdvertisementItemProps) => {
  return (
    <Link href={`/admin/advertisements/edit/${item._id}`} 
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
       <span 
        className='absolute hidden group-hover:block top-2 right-2 px-2 py-1
        text-white text-sm bg-accentBg transition-opacity delay-200 duration-300' 
        >
        Edit
      </span>
        <p className='text-lg font-medium'>
            {item.title}
        </p>
    </Link>
  )
}

export default AdvertisementItem;
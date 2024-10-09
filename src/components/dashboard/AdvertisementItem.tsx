import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AdvertisementItem = ({ item }: AdvertisementItemProps) => {
  return (
    <Link href={`/admin/advertisements/edit/${item._id}`} 
    className='flex flex-col gap-2 p-1 max-w-[300px] 
    text-center items-center justify-center border border-gray-400'
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
  )
}

export default AdvertisementItem;
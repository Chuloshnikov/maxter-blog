import React from 'react'
import DateConverter from '../ui/DateConverter';
import Link from 'next/link';

const Item = ({page, action, status, id, author, email, createdAt}: any) => {
return (
    <Link href={`/admin/${page}/${action}/${id}`} className='flex flex-col mt-2 sml:flex-row justify-between sml:gap-10 mdl:items-center text-md font-medium p-2 hover:bg-accentBg/25'>
        <div className='flex flex-col gap-1 mdl:gap-0'>
            <div className='lg:hidden flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                {author}
            </div>
            <div className='lg:hidden flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                {email}
            </div>
            <div className='lg:hidden font-medium text-sm'>
                {status ? (<span className='text-green-500'>approved</span>) : <span className='text-red-400'>not approved</span>}
            </div>
        </div>
        <div className='hidden lg:flex gap-2 text-gray-600 font-semibold flex-grow -mt-2 flex-1'>
            {author}
        </div>
        <div className='hidden lg:flex gap-2 text-gray-600 font-semibold flex-grow -mt-2 flex-1'>
            {email}
        </div>
        <div className='hidden lg:block font-medium text-sm flex-1'>
            {status ? (<span className='text-green-500'>approved</span>) : <span className='text-red-400'>not approved</span>}
        </div>
        <span className='font-medium text-sm whitespace-nowrap flex-shrink-0 lg:flex-1'>
            {DateConverter({ mongoDate: createdAt })}
        </span>
    </Link>
    )
}

export default Item;
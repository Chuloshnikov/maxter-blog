import DateConverter from '@/components/ui/DateConverter';
import PostSkeleton from '@/components/ui/PostSkeleton';
import { ProfileInfo } from '@/models/ProfileInfo';
import Link from 'next/link';
import React from 'react'

import { IoCheckboxSharp } from "react-icons/io5";

const UserItem = ({ item, status }: {item: ProfileInfo, status: boolean}) => {

if (!item) {
        return <PostSkeleton/>
    }

return (
    <Link href={`/admin/users/profile/${item._id}`} className='flex flex-col mt-2 sml:flex-row justify-between sml:gap-10 mdl:items-center text-md font-medium p-2 hover:bg-accentBg/25'>
        <div className='flex flex-col gap-1 mdl:gap-0 flex-1'>
            {item.displayName ? (
                <span className='text-accentBg font-bold text-bases'>
                    {item.displayName}
                </span>
                ) : (<span className='text-gray-500 font-bold text-base'>No displayname...</span>)}
            <div className='lg:hidden flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                {item.username}
            </div>
            <div className='lg:hidden flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                {item.email}
            </div>
            <div className='lg:hidden font-medium text-sm'>
                {!status ? (<span className='flex gap-1 items-center'>Admin <IoCheckboxSharp className='text-green-500 w-6 h-6'/></span>) : <span>not an admin</span>}
            </div>
        </div>
        <div className='hidden lg:flex gap-2 text-gray-600 font-semibold flex-grow -mt-2 flex-1'>
            {item.username}
        </div>
        <div className='hidden lg:flex gap-2 text-gray-600 font-semibold flex-grow -mt-2 flex-1'>
            {item.email}
        </div>
        <div className='hidden lg:block font-medium text-sm flex-1'>
            {status ? (<span className='flex gap-1 items-center'>Admin <IoCheckboxSharp className='text-green-500 w-6 h-6'/></span>) : <span>not an admin</span>}
        </div>
        <span className='font-medium text-sm whitespace-nowrap flex-shrink-0 lg:flex-1'>
            {DateConverter({ mongoDate: item.createdAt })}
        </span>
    </Link>
    )
}

export default UserItem;
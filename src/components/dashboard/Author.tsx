import Image from 'next/image';
import React from 'react'

const Author = ({ user }: any) => {
return (
    <div className=''>
      <div className='flex gap-2'>
      <Image className="w-16 h-16" src={user?.avatarUrl} width={1024} height={1024} alt='avatar'/>
        <div className='flex flex-col gap-1 text-sm'>
            <div className='text-gray-500 uppercase font-bold'>display name: <span>{user?.displayName}</span></div>
            <div className='text-gray-500 uppercase font-bold'>user name: <span>{user?.username}</span></div>
            <div className='text-gray-500 uppercase font-bold'>email: <span>{user?.email}</span></div>
        </div>
      </div>
    </div>
    )
}

export default Author;
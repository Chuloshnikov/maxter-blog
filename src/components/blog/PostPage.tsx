import Image from 'next/image';
import React from 'react'
import CommentsContainer from './CommentsContainer';
import AsideAdvertisement from '../asside/AsideAdvertisement';
import DateConverter from '../ui/DateConverter';
import CommentCreatorForm from './CommentCreatorForm';

const PostPage = ({post}: any) => {
  return (
    <div className=' flex flex-col xl:flex-row justify-evenly mx-2'>
      <div className='flex flex-col gap-4 mx-auto xl:max-w-5xl mb-4 xl:mb-0'>
        <div className='flex flex-col gap-1'>
          <Image src={post.img} width={1024} height={1024} alt='post image' className='max-h-[550px]'/>
          <h2 className='text-2xl text-accentBg font-bold'>
            {post.title}
          </h2>
          <div className='flex justify-between'>
            <div className='flex gap-1 items-end'>
              <Image src={post.avatarUrl} width={100} height={100} className='w-[30px] h-[30px]' alt='avatar'/>
              <h3 className='text-lg font-semibold text-gray-600'>{post.displayName}</h3>
            </div>
            <span className='font-medium text-sm'>{DateConverter({ mongoDate: post.createdAt })}</span>
          </div>
          <p className='text-lg'>
              {post.desc}
          </p>
        </div>
        <div>
          <CommentCreatorForm/>
          <CommentsContainer/>
        </div>
      </div>
      <div className=''>
          <AsideAdvertisement/>
      </div>
    </div>
  )
}

export default PostPage;
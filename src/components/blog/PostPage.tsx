import Image from 'next/image';
import React from 'react'
import CommentsContainer from './CommentsContainer';
import AsideAdvertisement from '../asside/AsideAdvertisement';
import DateConverter from '../ui/DateConverter';
import CommentCreatorForm from './CommentCreatorForm';
import Link from 'next/link';
import Statistics from './Statistics';

import { FaUser } from "react-icons/fa6";

const PostPage = ({post}: any) => {
  
  return (
    <div className=' flex flex-col xl:flex-row justify-evenly mx-2'>
      <div className='flex flex-col gap-4 mx-auto w-full xl:max-w-5xl mb-4 xl:mb-0'>
        <div className='flex flex-col gap-1'>
          {post.img && (<Image src={post.img} width={1024} height={1024} alt='post image' className='max-h-[550px]'/>)}
          <h2 className='text-2xl text-accentBg font-bold'>
            {post.title}
          </h2>
          <div  className='flex justify-between items-center'>
            <Link 
            href={`/profileinfo/${post.authorId}`}
            className='flex gap-1 items-end'
            >
              {post.avatarUrl ? (
                <Image src={post.avatarUrl} width={100} height={100} className='w-7 h-7' alt='avatar'/>
              ) : (
                <div className='w-7 h-7 flex flex-col items-center justify-center bg-accentBg text-white'>
                  <FaUser />
                </div>
              )}
              <h3 className='text-lg font-semibold text-gray-600'>{post.displayName}</h3>
            </Link>
            <span className='font-medium text-sm'>{DateConverter({ mongoDate: post.createdAt })}</span>
          </div>
         
          <p className='text-lg break-words overflow-hidden'>
              {post.desc}
          </p>
        </div>
        <div className='flex items-end justify-end'>
            <Statistics postId={post._id} views={post.views} initialLikes={post.likes} initialDislikes={post.dislikes} catSlug={post.catSlug}/>
          </div>
        <div>
          <CommentCreatorForm id={post._id}/>
          <CommentsContainer id={post._id}/>
        </div>
      </div>
      <div className='mx-auto'>
          <AsideAdvertisement/>
      </div>
    </div>
  )
}

export default PostPage;
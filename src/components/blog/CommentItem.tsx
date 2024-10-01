import { CommentTypes } from '@/models/Comment';
import React from 'react'
import CommentSkeleton from '../ui/CommentSkeleton';
import Image from 'next/image';
import DateConverter from '../ui/DateConverter';

const CommentItem = ({comment}: {comment: CommentTypes}) => {
  
  const {
    authorName,
    authorAvatarUrl,
    desc,
    createdAt
  } = comment;

  if (!comment) {
    return <CommentSkeleton/>

  }

  return (
    <div className='m-2 border-2 border-gray-300 p-2 md:p-4 flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='max-w-max flex gap-1 items-start'>
          <Image src={authorAvatarUrl} width={20} height={20} className='w-[20px] h-[20px]' alt='avatar'/>
          <span className='font-semibold text-gray-600'>{authorName}</span>
        </div>
        <div className='text-xs md:text-base'>
          {DateConverter({ mongoDate: createdAt })}
        </div>
      </div>
      <div>
        <p className='italic text-gray-500'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default CommentItem;
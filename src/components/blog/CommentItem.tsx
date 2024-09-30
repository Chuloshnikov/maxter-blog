import { CommentTypes } from '@/models/Comment';
import React from 'react'
import CommentSkeleton from '../ui/CommentSkeleton';
import Image from 'next/image';

const CommentItem = ({comment}: {comment: CommentTypes}) => {
  
  const {
    authorName,
    authorAvatarUrl,
    desc
  } = comment;

  if (!comment) {
    return <CommentSkeleton/>

  }

  return (
    <div className='m-2 border-2 border-gray-300 p-4'>
      <div className='h-8 max-w-max flex gap-1'>
        <Image src={authorAvatarUrl} width={30} height={30} alt='avatar'/>
        <span>{authorName}</span>
      </div>
      <div>
        <p>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default CommentItem;
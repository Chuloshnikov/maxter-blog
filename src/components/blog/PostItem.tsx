import React from 'react'

interface PostItemProps {
    _id: string;
    title: string;
    slug: string;
    img: string;
}

const PostItem = ({post}: {post: PostItemProps}) => {

  return (
    <div className='flex justify-between items-center text-md font-medium p-2'>
        <h2 className='text-accentBg font-bold text-xl'>{post.title}</h2>
        <div className='ml-2 flex items-end gap-2 flex-grow'>
            <span>author:</span>
            <span>John Doe</span>
        </div>
        <span>{post.createdAt}</span>
    </div>
  )
}

export default PostItem;
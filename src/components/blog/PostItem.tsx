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
        <div className='flex flex-col'>
            <h2 className='text-accentBg font-bold text-xl'>{post.title}</h2>
            <div className='flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                <span>author:</span>
                <span>John Doe</span>
            </div>
        </div>
        <span>{post.createdAt}</span>
    </div>
  )
}

export default PostItem;
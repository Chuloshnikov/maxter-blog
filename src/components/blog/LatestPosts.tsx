import React from 'react'
import PostItem from './PostItem'

const LatestPosts = ({title}) => {
    
  return (
    <div className="flex min-h-screen flex-col items-center px-4 xl:px-0">
    <div className='border border-2 border-accentBg w-full'>
        <h2 className="first-letter:text-2xl font-semibold text-xl text-white bg-accentBg p-2"></h2>
        <div>
            {posts && posts?.map(((post, index) => <PostItem key={index} post={post}/>))}
        </div>
    </div>
    </div>
  )
}

export default LatestPosts
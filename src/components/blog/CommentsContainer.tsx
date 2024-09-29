import React from 'react';
import CommentItem from './CommentItem';

const comments = [
    {
        title: "olala",
        desc: 'wow'
    },
    {
        title: "olala",
        desc: 'wow'
    }
];

const CommentsContainer = ({comments}: any) => {
  return (
    <div className='border border-2 border-accentBg w-full mt-4'>
    <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">All <span className='lowercase'>comments</span></h2>
    <div>
        {!comments?.length && (
          <div className='w-full h-[400px] flex items-center  justify-center'>
              <div className='text-lg font-medium'>
                  No comments found
              </div>
          </div>
        )}
        {comments && comments?.map(((comment, index) => <CommentItem title={comment.title} key={index}/>))}
    </div>
</div>
  )
}

export default CommentsContainer;
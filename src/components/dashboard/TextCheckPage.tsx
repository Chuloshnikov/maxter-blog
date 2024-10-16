import Image from 'next/image';
import React from 'react'

const TextCheckPage = ({text, title, img }: {text: string, title?: string, img?: string }) => {
  return (
    <div className='flex flex-col gap-4'>
      {img && (
        <Image src={img} width={1024} height={1024} alt="postImg"/>
      )}
        {title && (
          <div>
              <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Title</span>
              <div className='bg-gray-200 p-4 text-lg'>
                {title}
              </div>
          </div>
         
        )}
      <div>
        <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Text</span>
        <div className='bg-gray-200 p-4'>
          {text}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        ApprovalButton      
        DeleteButton
      </div>
    </div>
  )
}

export default TextCheckPage;
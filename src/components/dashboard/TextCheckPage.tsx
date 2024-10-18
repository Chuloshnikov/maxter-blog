import Image from 'next/image';
import React from 'react'
import ApprovalButton from './ApprovalButton';
import DeleteButton from './DeleteButton';
import { sliceLastSymbolOfString } from '@/lib/utils';

const TextCheckPage = ({item, text, title, img, action}: {item: any, text: string, title?: string, img?: string, action: string }) => {

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
        <div className='bg-gray-200 p-4 break-words overflow-hidden'>
          {text}
        </div>
      </div>
      <div className='flex justify-between items-center'>
       <ApprovalButton id={item._id} approved={item.approved} action={action}/>     
       <DeleteButton item={sliceLastSymbolOfString(action)} dir={action} id={item?._id}/>
      </div>
    </div>
  )
}

export default TextCheckPage;
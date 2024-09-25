import { uploadToS3 } from '@/actions/uploadActions';
import React, { ChangeEvent } from 'react'

import { ImFolderUpload } from "react-icons/im";

const UploadButton = ({ 
    onUploadComplete 
}: {
    onUploadComplete: (url: string) => void;
}
) => {

    async function upload(ev: ChangeEvent<HTMLInputElement>) {
        const target = ev.target as HTMLInputElement;
        if (target.files?.length) {
          const file = target.files[0];
          const formData = new FormData;
          formData.set('file', file);
          const result = await uploadToS3(formData);
          console.log(result);
          onUploadComplete(result.url as string);
        }
      }

  return (
    <>
    <label className='bg-accentBg text-white font-semibold p-2 flex max-w-max cursor-pointer shadow-sm'>
        <span><ImFolderUpload className='w-4 h-4'/></span>
        <input className='hidden' type="file" onChange={ev => upload(ev)}/>
    </label>
    </>
  )
}

export default UploadButton
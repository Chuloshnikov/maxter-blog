import React, { useState } from 'react';
import UploadButton from '../ui/UploadButton';
import Image from 'next/image';
import { createPost } from '@/actions/postsActions';
import toast from 'react-hot-toast';

interface PostManager {
    action: string;
    category: string;

}

interface PostSender {
    action: string;
    category: string;
}



const PostManager = ({action, category}: PostManager) => {
    const [postImg, setPostImg] = useState<string>('')

    const reloadPage = () => {
        setTimeout(() => {
        window.location.reload();
        }, 2000);
      }

   
    async function handleFormAction(formData: FormData) {
        if (action === "create") {
            await createPost(formData);
            toast.success('Post created!');
            reloadPage();
        }
    }

    

   
  return (
    <div className='w-full'>
        <div>
            <h2 className='capitalize text-xl font-bold text-accentBg'>{action} a post</h2>
        </div>
        <form action={handleFormAction} className='w-full flex flex-col'>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
            <div className='w-full'>
                <div>
                    <label htmlFor="titleInput" className='input-label'>title:</label>
                    <input name="title" id='titleInput' type='text'/>
                </div>
                <div>
                    <label htmlFor="descriptionInput" className='input-label'>Description:</label>
                    <textarea name="desc" id="descriptionInput"  rows={10}/>
                </div>
                    <input type="hidden" name="slug" value={category}/>
                <button 
                type="submit"
                className='submitButton capitalize mt-4 w-full hidden lg:block'
                >
                    {action}
                </button>
            </div>
            <div className='w-full'>
                <label className='input-label mt-4'>Image:</label>
                <div className="relative border h-[400px] border-2 border-accentBg">
                    
                {postImg && (
                    <Image 
                    src={postImg || ''} 
                    alt="cover image"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                    />
                )}
                    <div className="absolute right-2 bottom-2">
                        <UploadButton onUploadComplete={setPostImg} />
                    <input type="hidden" name="coverUrl" value={postImg}/>
                    </div>
                </div>
            </div>
        </div>
        <button 
        type='submit'
        className='submitButton capitalize mt-4 w-full lg:hidden'
            >
                {action}
        </button>
    </form>
    </div>
  )
}

export default PostManager
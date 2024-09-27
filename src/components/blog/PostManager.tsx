import { getProfile } from '@/actions/profileInfoActions';
import React, { FormEventHandler, useEffect, useState } from 'react';
import UploadButton from '../ui/UploadButton';
import Image from 'next/image';

interface PostManager {
    action: string;
    category: string;

}

interface PostSender {
    action: string;
    category: string;
    user: string[];
}



const PostManager = ({action, category}: PostManager) => {
    const [user, setUser] = useState<any>(null);
    const [postImg, setPostImg] = useState<string>('')

    useEffect(() => {
        getProfile().then(profile => setUser(profile));
    }, []);

    async function post({action, category, user}: PostSender): FormEventHandler<HTMLFormElement> {

    }
    

   console.log(user);
  return (
    <div className='w-full'>
        <div>
            <h2 className='capitalize text-xl font-bold text-accentBg'>{action} a post</h2>
        </div>
        <form onSubmit={post} className='w-full flex flex-col'>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
            <div className='w-full'>
                <div>
                    <label className='input-label'>title:</label>
                    <input type='text'/>
                </div>
                <div>
                    <label className='input-label'>Description:</label>
                    <textarea  rows={10}/>
                </div>
                <button 
                type='submit'
                className='submitButton mt-4 w-full hidden lg:block'
                >
                    click
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
                    className="w-full h-48 object-cover"
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
        className='submitButton mt-4 w-full lg:hidden'
            >
                click
        </button>
    </form>
    </div>
  )
}

export default PostManager
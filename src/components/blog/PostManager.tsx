import React, { useState } from 'react';
import UploadButton from '../ui/UploadButton';
import Image from 'next/image';
import { createPost } from '@/actions/postsActions';
import toast from 'react-hot-toast';
import { validatePostForm } from '@/lib/validation';
import ButtonLoading from '../ui/ButtonLoading';

interface PostSender {
    action: string;
    category: string | string[];
}


const PostManager = ({action, category}: PostSender) => {
    const [postImg, setPostImg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const reloadPage = () => {
        setTimeout(() => {
        window.location.reload();
        }, 2000);
      }

    async function handleFormAction(formData: FormData) {
        setLoading(true);
        const dataObject: any = {};

        formData.forEach((value, key) => {
            dataObject[key] = value;
          });

        const validationErrors = validatePostForm(dataObject);
            if (validationErrors.length > 0) {
                toast.error(validationErrors.join(', '), {
                    style: {
                        borderRadius: '0px',
                        border: '1px solid #EF4444',
                        padding: '16px',
                        color: '#EF4444',
                    },
                    iconTheme: {
                        primary: '#EF4444',
                        secondary: '#FFFAEE',
                    },
                });
                setLoading(false);
                return;  
            }

        if (action === "create") {
            await createPost(formData);
            toast.success(`Post ${action}d, wait for moderation!`, {
                    style: {
                        borderRadius: '0px',
                        border: '1px solid #3DB4FF',
                        padding: '16px',
                        color: '#3DB4FF',
                    },
                    iconTheme: {
                        primary: '#3DB4FF',
                        secondary: '#FFFAEE',
                    },
                });
            setLoading(false);
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
                     {loading ? (<ButtonLoading margin='' loading={loading}/>) : action}
                </button>
            </div>
            <div className='w-full'>
                <label className='input-label mt-4'>Image:</label>
                <div className="relative border h-[200px] md:h-[400px] border-2 border-accentBg">
                    
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
                    <input type="hidden" name="postImg" value={postImg}/>
                    </div>
                </div>
            </div>
        </div>
        <button 
        type='submit'
        className='submitButton capitalize mt-4 w-full lg:hidden'
            >
                {loading ? (<ButtonLoading margin='' loading={loading}/>) : action}
        </button>
    </form>
    </div>
  )
}

export default PostManager
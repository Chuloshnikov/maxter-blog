"use client"
import { validateCategoryForm } from '@/lib/validation';
import { CategoryInfo } from '@/models/Category'
import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast';
import UploadButton from '../ui/UploadButton';
import Image from 'next/image';

const CreateCategoryForm = ({category, action,}: {category?: CategoryInfo, action: string}) => {
    const [imgUrl, setImgUrl] = useState<string>(category?.img || '');
    const [title, setTitle] = useState<string>(category?.title || '');
    const [loading, setLoading] = useState<boolean>(false);


    async function handleFormSubmit(ev: ChangeEvent<HTMLFormElement>) {
        ev.preventDefault();

        const data = {
          title, 
          imgUrl, 
          id: category?._id
        }
        const validationErrors = validateCategoryForm({title});
        
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
                  const response = await fetch('/api/categories', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                  });
                  if (response.ok) {
                    toast.success(`Category ${action}d!`, {
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
                  } else {
                    toast.error("An error was occurred", {
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
                  }
              }
      
              if (action === "update") {
                const response = await fetch('/api/categories', {
                  method: 'PUT',
                  body: JSON.stringify(data),
                  headers: {'Content-Type': 'application/json'}
                });
                if (response.ok) {
                  toast.success(`Category ${action}d!`, {
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
                } else {
                  toast.error("An error was occurred", {
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
                }
              }
              setLoading(false);   
    }

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col lg:flex-row gap-6'>
    <div className="flex flex-col gap-2 flex-grow">
        <div>
            <label className="input-label" htmlFor="titleInput">title</label>
            <input 
            onChange={ev => setTitle(ev.target.value)}
            defaultValue={category?.title || title} 
            name='title' 
            id="titleInput" 
            type="text" 
            placeholder="title..."
            />
        </div>
        <button type='submit' className='submitButton capitalize'>{loading ? <ButtonLoading margin={'px-[10px]'} loading={loading}/> : action}</button>
    </div>
        <div className="relative border w-56 h-56 mb-4 border-2 border-accentBg mx-auto">
        {imgUrl && (
            <Image 
            src={imgUrl || ''} 
            alt="cover image"
            width={1024}
            height={1024}
            className="w-56 h-56 object-cover"
            />
        )}
        <div className="absolute right-2 bottom-2">
            <UploadButton onUploadComplete={setImgUrl} />
            <input type="hidden" name="coverUrl" value={imgUrl}/>
        </div>
        </div>
</form>
  )
}

export default CreateCategoryForm
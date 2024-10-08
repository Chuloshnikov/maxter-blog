"use client"
import { validateAdvertisementForm } from '@/lib/validation';
import Image from 'next/image';
import { useState } from 'react';
import UploadButton from '../ui/UploadButton';


type Props = {
    profileInfo: ProfileInfo | null;
  };

const AdvertisementManagerForm = ({ advertisement, action }: any) => {
    const [coverUrl, setCoverUrl] = useState(advertisement?.coverUrl);
    const [loading, setLoading] = useState<boolean>(false);

    async function handleFormAction(formData: FormData) {
        setLoading(true);
            const dataObject: any = {};
    
            formData.forEach((value, key) => {
                dataObject[key] = value;
              });
    
            const validationErrors = validateAdvertisementForm(dataObject);
        
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
    
        await saveProfile(formData);
        toast.success(`Advertisement ${action}!`, {
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
      }
    
    
  return (
    <div>
        <div>
            <h1 className='text-accentBg text-4xl font-bold'>
                <span className='capitelize'>{action}</span> advertisement
            </h1>
        </div>
        <form action={handleFormAction} className='flex flex-col lg:flex-row gap-6'>
            <div className="flex flex-col gap-2 flex-grow">
                <div>
                    <label className="input-label" htmlFor="titleInput">title</label>
                    <input 
                    defaultValue={advertisement?.username} 
                    name='title' 
                    id="titleInput" 
                    type="text" 
                    placeholder="title..."
                    />
                </div>
                <div>
                    <label className="input-label" htmlFor="displayNameInput">website url</label>
                    <input 
                    defaultValue={advertisement?.displayName} 
                    name="websiteUrl" 
                    id="websiteUrlInput" 
                    type="text" 
                    placeholder="website url..."
                    />
                </div>
            </div>
                <div className="relative border w-56 h-56 mb-4 border-2 border-accentBg mx-auto">
                {coverUrl && (
                    <Image 
                    src={coverUrl || ''} 
                    alt="cover image"
                    width={1024}
                    height={1024}
                    className="w-56 h-56 object-cover"
                    />
                )}
                <div className="absolute right-2 bottom-2">
                    <UploadButton onUploadComplete={setCoverUrl} />
                    <input type="hidden" name="coverUrl" value={coverUrl}/>
                </div>
                </div>
        </form>
    </div>
  )
}

export default AdvertisementManagerForm;
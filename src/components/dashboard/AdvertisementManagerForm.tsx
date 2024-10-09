"use client"
import { validateAdvertisementForm } from '@/lib/validation';
import Image from 'next/image';
import { useState } from 'react';
import UploadButton from '../ui/UploadButton';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { createAdvertisement, updateAdvertisement } from '@/actions/advertisementActions';

import { redirect } from 'next/navigation'


type AdvertProps = {
    _id?: FormDataEntryValue;
    title: string;
    websiteUrl: string;
    coverUrl: string;
  };

const AdvertisementManagerForm = ({ advertisement, action }: {advertisement?: AdvertProps, action: string}) => {
    const [coverUrl, setCoverUrl] = useState<string>(advertisement?.coverUrl || '');
    const [title, setTitle] = useState<string>(advertisement?.title || '');
    const [webUrl, setWebUrl] = useState<string>(advertisement?.websiteUrl || '');
    const [loading, setLoading] = useState<boolean>(false);

    const reloadPage = () => {
        setTimeout(() => {
           return redirect('/admin/advertisements');
           {/* внеси изменения на роутер пуш и страницу суссес*/}
        }, 2000);
      }

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
        if (action === "create") {
            await createAdvertisement(formData);
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
        }

        if (action === "update") {
            await updateAdvertisement(formData);
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
        }
        
        setLoading(false);
        reloadPage();
      }
    
    
  return (
    <div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-accentBg text-4xl font-bold'>
                <span className='capitalize'>{action}</span> advertisement
            </h1>
            <Link 
            className='submitButton mt-8 max-w-max'
            href={'/admin/advertisements'}
            >
                Back to advertisements
            </Link>
        </div>
        <form action={handleFormAction} className='flex flex-col lg:flex-row gap-6'>
            <div className="flex flex-col gap-2 flex-grow">
                <div>
                    <label className="input-label" htmlFor="titleInput">title</label>
                    <input 
                    onChange={ev => setTitle(ev.target.value)}
                    defaultValue={advertisement?.title || title} 
                    name='title' 
                    id="titleInput" 
                    type="text" 
                    placeholder="title..."
                    />
                </div>
                <div>
                    <label className="input-label" htmlFor="websiteUrlInput">website url</label>
                    <input 
                    onChange={ev => setWebUrl(ev.target.value)}
                    defaultValue={advertisement?.websiteUrl} 
                    name="websiteUrl" 
                    id="websiteUrlInput" 
                    type="text" 
                    placeholder="website url..."
                    />
                </div>
                {action === "update" && (
                <div className='hidden'>
                     <input 
                    defaultValue={advertisement?._id} 
                    name="_id" 
                    id="_id" 
                    type="text" 
                    />
                </div>
                )}
                <button className='submitButton'>{action}</button>
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
        <div className='mx-auto'>
            <div className='w-[300px] mx-auto text-center'>
                <div className='max-w-[295px] border border-gray-400'>
                {webUrl ? (
                    <Link 
                    href={webUrl} 
                    target="_blank" 
                    className='flex flex-col gap-2 p-1 h-auto w-[295px] text-center'>
                        {coverUrl ? (
                            <Image src={coverUrl} 
                            width={1024} 
                            height={1024} 
                            className='w-[295px] h-[295px] object-contain' 
                            alt='advertisement image'
                            />
                            ) : (
                            <div className='advertContainer w-[295px] h-[295px]'>
                            </div>
                            )}
                            <p className='text-lg font-medium w-[295px] break-words px-1'>
                                {title}
                            </p>
                    </Link>
                    ) : (
                        <div className='flex flex-col gap-2 p-1 h-auto w-[295px] text-center'>
                            {coverUrl ? (
                                <Image src={coverUrl} 
                                width={1024} 
                                height={1024} 
                                className='w-[295px] h-[295px] object-contain' 
                                alt='advertisement image'
                            />
                            ) : (
                                <div className='advertContainer w-[295px] h-[295px]'>
                                </div>
                            )}
                            <p className='text-lg font-medium w-[295px] break-words px-1'>
                                {title}
                            </p>
                            
                        </div>
                    )}
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AdvertisementManagerForm;
'use client'
import { ProfileInfo } from '@/models/ProfileInfo';
import {saveProfile} from "@/actions/profileInfoActions";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import UploadButton from '../ui/UploadButton';


import { FaUserAlt } from "react-icons/fa";
import Image from 'next/image';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { validateProfileForm } from '@/lib/validation';
import ButtonLoading from '../ui/ButtonLoading';


type Props = {
    profileInfo: ProfileInfo | null;
  };

export default function ProfileInfoForm({profileInfo}:Props) {
  const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
  const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);
  const [loading, setLoading] = useState<boolean>(false);


  async function handleFormAction(formData: FormData) {
    setLoading(true);
        const dataObject: any = {};

        formData.forEach((value, key) => {
            dataObject[key] = value;
          });

        const validationErrors = validateProfileForm(dataObject);
    
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
    toast.success('Profile saved!', {
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
    <form action={handleFormAction}>
        <div className="relative border h-48 mb-4 border-2 border-accentBg">
          {coverUrl && (
            <Image 
            src={coverUrl || ''} 
            alt="cover image"
            width={1024}
            height={1024}
            className="w-full h-48 object-cover"
            />
          )}
          <div className=" absolute left-4 -bottom-4 z-10 border-2 border-accentBg bg-gray-100 size-24">
            {avatarUrl ? (
              <Image src={avatarUrl || ''} 
              width={120} 
              height={120} 
              className='w-full h-full object-cover'
              alt="avatar"/>
              ) : (
              <FaUserAlt 
              className='w-full h-full text-accentBg'
              />
            )}
            <div className='absolute bottom-0 right-0'>
              <UploadButton onUploadComplete={setAvatarUrl}/>
            </div>
            <input type='hidden' name="avatarUrl" value={avatarUrl}/>
          </div>
          <div className="absolute right-2 bottom-2">
              <UploadButton onUploadComplete={setCoverUrl} />
              <input type="hidden" name="coverUrl" value={coverUrl}/>
          </div>
          <div>
              <span 
              onClick={() => signOut()}
              className="absolute cursor-pointer right-2 top-2 bg-accentBg px-2 py-1 text-white font-semibold hover:bg-white hover:text-accentBg border border-2 border-accentBg duration-200">
                  Log out
              </span>
          </div>
      </div>
      <div className="flex flex-col mdl:grid grid-cols-2 gap-2">
        <div>
            <label className="input-label" htmlFor="usernameInput">username</label>
            <input 
            defaultValue={profileInfo?.username} 
            name='username' 
            id="usernameInput" 
            type="text" 
            placeholder="username..."
            />
          </div>
          <div>
            <label className="input-label" htmlFor="displayNameInput">displayname</label>
            <input 
            defaultValue={profileInfo?.displayName} 
            name="displayName" 
            id="displaynameInput" 
            type="text" 
            placeholder="display name..."
            />
          </div>
      </div>
        <label className="input-label" htmlFor="bioInput">bio</label>
        <textarea 
        defaultValue={profileInfo?.bio} 
        name="bio" 
        id="bioInput" 
        placeholder="bio..."/>
        <div>
        
          <button type='submit' className="submitButton mt-4">
            {loading ? (<ButtonLoading margin={""} loading={loading}/>) : "Save profile"}
          </button>
        </div>
    </form>
  )
}

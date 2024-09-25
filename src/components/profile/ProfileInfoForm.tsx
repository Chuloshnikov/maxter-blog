'use client'
import { ProfileInfo } from '@/models/ProfileInfo';
import {saveProfile} from "@/actions/profileInfoActions";
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { uploadToS3 } from '@/actions/uploadActions';
import { ImFolderUpload } from "react-icons/im";

type Props = {
    profileInfo: ProfileInfo | null;
  };

export default function ProfileInfoForm({profileInfo}:Props) {

    const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
  const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);

  async function handleFormAction(formData: FormData) {
    const result = await saveProfile(formData);
    if (result) {
      toast.success('Profile saved!');
    } else {
      toast.error('an error has occurred');
    }
  }

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData;
      formData.set('file', file);
      await uploadToS3(formData);
    }
  }

  return (
    <form action={handleFormAction}>
        <div className="border p-4">
        <div className="border size-24 p-4">avatar</div>
        cover image
        <label className='bg-accentBg text-white font-semibold p-2 flex max-w-max'>
          <span><ImFolderUpload className='w-4 h-4'/></span>
          <input className='hidden' type="file" onChange={ev => upload(ev)}/>
        </label>
        
      </div>
        <div>cover image</div>
        <div>
          <label className="mt-4" htmlFor="usernameInput">username:</label>
          <input name='username' id="usernameInput" type="text" placeholder="username"/>
        </div>
        <div>
          <label className="mt-4" htmlFor="displayNameInput">displayname</label>
          <input name="displayname" id="displaynameInput" type="text" placeholder="display name"/>
        </div>
        <label className="mt-4" htmlFor="bioInput">bio</label>
        <textarea name="bio" id="bioInput" name="" placeholder="bio"></textarea>
        <div>
          <button type='submit' className="submitButton mt-4">Save profile</button>
        </div>
    </form>
  )
}

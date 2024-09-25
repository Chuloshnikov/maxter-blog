'use client'
import { ProfileInfo } from '@/models/ProfileInfo';
import {saveProfile} from "@/actions/profileInfoActions";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

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

  return (
    <form action={handleFormAction}>
        <div className="bg-gray-200 p-4">
        <div className="bg-gray-300 size-24 p-4">avatar</div>
        cover image
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

'use client'
import { ProfileInfo } from '@/models/ProfileInfo';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
    profileInfo: ProfileInfo | null;
  };

export default function ProfileInfoForm({profileInfo}:Props) {

    const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
  const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);

  async function handleFormAction(formData: FormData) {
    //await saveProfile(formData);
    toast.success('Profile saved!');
  }

  return (
    <form>
        <div className="bg-gray-200 p-4">test
        <div className="bg-gray-300 size-24 p-4">avatar</div>
      </div>
        <div>cover image</div>
        <div>
          <label className="mt-4" htmlFor="usernameInput">username:</label>
          <input id="usernameInput" type="text" placeholder="username"/>
        </div>
        <div>
          <label className="mt-4" htmlFor="displayNameInput">displayname</label>
          <input id="displaynameInput" type="text" placeholder="display name"/>
        </div>
        <label className="mt-4" htmlFor="bioInput">bio</label>
        <textarea id="bioInput" name="" placeholder="bio"></textarea>
        <div>
          <button className="submitButton mt-4">Save profile</button>
        </div>
    </form>
  )
}

'use client'
import { ProfileInfo } from '@/models/ProfileInfo';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
    profileInfo: ProfileInfo | null;
  };

export default function ProfileForm({profileInfo}:Props) {

    const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
  const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);

  async function handleFormAction(formData: FormData) {
    //await saveProfile(formData);
    toast.success('Profile saved!');
  }

  return (
    <div>ProfileForm</div>
  )
}

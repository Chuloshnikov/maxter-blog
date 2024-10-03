"use client"
import AsideAdvertisement from '@/components/asside/AsideAdvertisement';
import Preloader from '@/components/ui/Preloader';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';

interface Profile {
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
}

const ProfileInfo = ({ params: { authorId } }: { params: { authorId: string } }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authorId) {
      fetch(`/api/profile/${authorId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          setProfile(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [authorId]);

  if (error) {
    return <div>Error loading profile: {error}</div>;
  }

  if (!profile) {
    <section className="flex min-w-screen min-h-[calc(100vh-21.1rem)] items-center justify-center">
      <Preloader/>
    </section>
  }

  return (
    <div className=' flex flex-col gap-8 xl:flex-row justify-evenly mx-2'>
      <div className='flex flex-col gap-4 mx-auto w-full xl:max-w-5xl mb-4 xl:mb-0'>
        

      <div className="relative border h-64 mb-4 border-2 border-accentBg">
          {profile?.coverUrl && (
            <Image
            src={profile?.coverUrl || ''} 
            alt="cover image"
            width={1024}
            height={1024}
            className="w-full h-64 object-cover"
            />
          )}
            <div className=" absolute left-4 -bottom-4 z-10 border-2 border-accentBg bg-gray-100 size-24">
              {profile?.avatarUrl ? (
                <Image src={profile?.avatarUrl || ''} 
                width={120} 
                height={120} 
                className='w-full h-full object-cover'
                alt="avatar"/>
                ) : (
                <FaUserAlt 
                className='w-full h-full text-accentBg'
                />
              )}
            </div>
        </div>
          <div>
            <label className="input-label" htmlFor="displayNameInput">username</label>
            <input 
            defaultValue={profile?.displayName} 
            disabled
            name="displayName" 
            id="displaynameInput" 
            type="text" 
            placeholder="display name..."
            />
          </div>
          <div>
            <label className="input-label" htmlFor="bioInput">bio</label>
              <textarea 
              defaultValue={profile?.bio} 
              name="bio" 
              disabled
              id="bioInput" 
              placeholder="bio..."/>
          </div>
      </div>
      <div className='mx-auto'>
          <AsideAdvertisement/>
      </div>
    </div>
  );
};

export default ProfileInfo;
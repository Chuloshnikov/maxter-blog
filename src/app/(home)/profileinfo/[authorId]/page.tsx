"use client";
import AsideAdvertisement from '@/components/asside/AsideAdvertisement';
import Preloader from '@/components/ui/Preloader';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import PostsContainer from '@/components/blog/PostsContainer';
import { PostInfo } from '@/models/Post';

interface Profile {
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
}


const fetchProfile = async (authorId: string): Promise<Profile> => {
  const response = await fetch(`/api/profile/${authorId}`);
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

const fetchAuthorPosts = async (authorId: string): Promise<PostInfo[]> => {
  const response = await fetch(`/api/authorposts/${authorId}`);
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

const ProfileInfo = ({ params: { authorId } }: { params: { authorId: string } }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [posts, setPosts] = useState<PostInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authorPostsError, setAuthorPostsError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (authorId) {
      setLoading(true);
      Promise.all([fetchProfile(authorId), fetchAuthorPosts(authorId)])
        .then(([profileData, postsData]) => {
          setProfile(profileData);
          setPosts(postsData);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [authorId]);

  if (loading || !profile) {
    return (
      <section className="flex min-w-screen min-h-[calc(100vh-21.1rem)] items-center justify-center">
        <Preloader />
      </section>
    );
  }

  if (error) {
    return <div>Error loading profile: {error}</div>;
  }

  return (
    <div className='flex flex-col gap-8 xl:flex-row justify-evenly mx-2'>
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
          <div className="absolute left-4 -bottom-4 z-10 border-2 border-accentBg bg-gray-100 size-24">
            {profile?.avatarUrl ? (
              <Image
                src={profile?.avatarUrl || ''}
                width={120}
                height={120}
                className='w-full h-full object-cover'
                alt="avatar"
              />
            ) : (
              <FaUserAlt className='w-full h-full text-accentBg' />
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
            rows={10}
            name="bio"
            disabled
            id="bioInput"
            placeholder="bio..."
          />
        </div>
        <div>
          <PostsContainer posts={posts} loading={loading} slug={profile?.displayName} />
        </div>
      </div>
      <div className='mx-auto'>
        <AsideAdvertisement />
      </div>
    </div>
  );
};

export default ProfileInfo;

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PostItem from '@/components/blog/PostItem';
import { useSession } from "next-auth/react";
import {createProfile} from "@/actions/profileInfoActions";
import PostManager from '@/components/blog/PostManager';

export default function PostsPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState<string[]>([]);

  const session = useSession();
  const {status} = session;
  console.log(session);

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    }
    
  }, [slug]);

  useEffect(() => {
    if (status === 'authenticated') {
      const formData = new FormData();
      formData.append('username', session?.data?.user?.name || '');
      formData.append('avatarUrl', session?.data?.user?.image || '');
      
      createProfile(formData);
    }
  
  }, [session, status]);


  if (!posts) return <p>Loading...</p>;

  
  return (
    <section className="flex min-h-screen flex-col items-center px-4 xl:px-0 pb-8">
        {status === 'authenticated' && (
          <PostManager 
          action={"create"}
          category={slug}
          />
        )}
        <div className='border border-2 border-accentBg w-full mt-8'>
            <h2 className="first-letter:text-2xl font-semibold text-xl text-white bg-accentBg p-2">{slug}</h2>
            <div>
                {posts && posts?.map(((post, index) => <PostItem key={index} post={post}/>))}
            </div>
        </div>
    </section>
  );
}
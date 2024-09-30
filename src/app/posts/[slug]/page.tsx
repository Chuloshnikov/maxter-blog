'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PostItem from '@/components/blog/PostItem';
import { useSession } from "next-auth/react";
import {createProfile} from "@/actions/profileInfoActions";
import PostManager from '@/components/blog/PostManager';
import PostsContainer from '@/components/blog/PostsContainer';

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
      <PostsContainer posts={posts} slug={slug}/>
    </section>
  );
}
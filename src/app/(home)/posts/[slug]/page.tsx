'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from "next-auth/react";
import {createProfile} from "@/actions/profileInfoActions";
import PostManager from '@/components/blog/PostManager';
import PostsContainer from '@/components/blog/PostsContainer';
import { PostInfo } from '@/models/Post';

export default function PostsPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const session = useSession();
  const {status} = session;
  console.log(session);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetch(`/api/posts/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          const approvedPosts = data.filter((post: PostInfo) => post.approved); // filter approved posts
          setPosts(approvedPosts);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
          setLoading(false);
        });
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
      <PostsContainer loading={loading} posts={posts} slug={slug}/>
    </section>
  );
}
"use client"

import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import Preloader from '../ui/Preloader';
import { PostInfo } from '@/models/Post';


const LatestPosts = ({title}: {title: string}) => {
    const [posts, setPosts] = useState<PostInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchPosts() {
        try {
            const res = await fetch('/api/latestposts');
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
          }
        }
    
        fetchPosts();
    }, []);


  if (loading) {
    <section className="flex min-w-screen min-h-[calc(100vh-21.1rem)] items-center justify-center">
      <Preloader/>
    </section>
  }

  const approvedPosts = posts.filter(post => post.approved);

  return (
    <div className="flex flex-col items-center px-4 xl:px-0 mb-8">
    <div className='border border-2 border-accentBg w-full'>
        <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">{title}</h2>
        <div>
        {approvedPosts.length === 0 ? (
            <div className='w-full min-h-[400px] flex items-center justify-center'>
              <div className='text-lg font-medium'>
                No approved posts found
              </div>
            </div>
          ) : (
            approvedPosts.map((post, index) => <PostItem title={title} key={index} post={post} />)
          )}
        </div>
    </div>
    </div>
  )
}

export default LatestPosts;
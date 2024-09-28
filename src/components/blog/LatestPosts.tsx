"use client"

import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import Preloader from '../ui/Preloader';

interface Posts {
    _id: string;
    title: string;
    desc: string;
    createdAt: string;
    views: string;
  }

const LatestPosts = ({title}: {title: string}) => {
    const [posts, setPosts] = useState<Posts[]>([]);
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

  return (
    <div className="flex flex-col items-center px-4 xl:px-0 mb-8">
    <div className='border border-2 border-accentBg w-full'>
        <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">{title}</h2>
        <div>
            {!posts.length && (
              <div className='w-full h-[400px] flex items-center  justify-center'>
                  <div className='text-lg font-medium'>
                      No posts found
                  </div>
              </div>
            )}
            {posts && posts?.map(((post, index) => <PostItem title={title} key={index} post={post}/>))}
        </div>
    </div>
    </div>
  )
}

export default LatestPosts
"use client"

import { useState, useEffect } from 'react';
import PostItem from './PostItem';

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

    if (loading) return <p>Loading...</p>;

    if (posts.length === 0) return <p>No posts found</p>;

  return (
    <div className="flex min-h-screen flex-col items-center px-4 xl:px-0">
    <div className='border border-2 border-accentBg w-full'>
        <h2 className="first-letter:text-2xl font-semibold text-xl text-white bg-accentBg p-2">{title}</h2>
        <div>
            {posts && posts?.map(((post, index) => <PostItem title={title} key={index} post={post}/>))}
        </div>
    </div>
    </div>
  )
}

export default LatestPosts
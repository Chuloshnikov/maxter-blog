'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PostItem from '@/components/blog/PostItem';

export default function PostPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState<string[]>([]);
  

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    }
    
  }, [slug]);


  if (!posts) return <p>Loading...</p>;

  
  return (
    <section className="flex min-h-screen flex-col items-center px-4 xl:px-0">
        <div className='border border-2 border-accentBg w-full'>
            <h2 className="first-letter:text-2xl font-semibold text-xl text-white bg-accentBg p-2">{slug}</h2>
            <div>
                {posts && posts?.map(((post, index) => <PostItem key={index} post={post}/>))}
            </div>
        </div>
    </section>
  );
}
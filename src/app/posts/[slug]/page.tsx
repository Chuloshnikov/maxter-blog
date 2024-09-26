'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState(null);
  

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [slug]);


  if (!posts) return <p>Loading...</p>;

  
  return (
    <div>
        {posts && posts.map((post => (
            <div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <img src={post.img} alt={post.title} />
                <h3>Views: {post.views}</h3>
            </div>
        )))}
      
    </div>
  );
}
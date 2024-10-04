"use client";
import PostPage from "@/components/blog/PostPage";
import { useEffect, useState } from "react";

export default function Post({ params: { _id } }: SearchParamProps) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    //Check viewed in localstorage
    let viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '[]');

    // Is views is array
    if (!Array.isArray(viewedPosts)) {
      viewedPosts = [];
    }

    //If its first time to viewed
    if (!viewedPosts.includes(_id)) {
      // Отправляем запрос для увеличения просмотров
      fetch(`/api/post/${_id}`, { method: 'PUT' })
        .then((res) => res.json())
        .then(() => {
          // add to viewed
          localStorage.setItem('viewedPosts', JSON.stringify([...viewedPosts, _id]));
        })
        .catch((err) => console.error('Failed to increment view count', err));
    }

    fetch(`/api/post/${_id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error('Failed to fetch post data', err));
  }, [_id]);

  return (
    <section className="min-w-screen min-h-[calc(100vh-21.1rem)] mx-auto flex flex-col mb-8">
      {post && <PostPage post={post} />}
    </section>
  );
}
"use client"
import {useState, useEffect } from "react";
import PostPage from "./PostPage";

const PostPageContainer = ({ postId }: any) => {
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
      //Check viewed in localstorage
      let viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '[]');
  
      // Is views is array
      if (!Array.isArray(viewedPosts)) {
        viewedPosts = [];
      }
  
      //If its first time to viewed
      if (!viewedPosts.includes(postId)) {
        // Отправляем запрос для увеличения просмотров
        fetch(`/api/post/${postId}`, { method: 'PUT' })
          .then((res) => res.json())
          .then(() => {
            // add to viewed
            localStorage.setItem('viewedPosts', JSON.stringify([...viewedPosts, postId]));
          })
          .catch((err) => console.error('Failed to increment view count', err));
      }
  
      fetch(`/api/post/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((err) => console.error('Failed to fetch post data', err));
    }, [postId]);
  
    return (
    <>
        {post && <PostPage post={post} />}
    </>
    );
}

export default PostPageContainer
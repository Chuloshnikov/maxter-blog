"use client"
import PostPage from "@/components/blog/PostPage";
import { useEffect, useState } from "react";

export default function Post({params: {_id}}: SearchParamProps) {

    const [post, setPost] = useState<any>(null);
    console.log(post);

    useEffect(() => {
      fetch(`/api/post/${_id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [_id]); 

    return (
        <section className="min-w-screen min-h-[calc(100vh-21.1rem)] mx-auto flex flex-col mb-8">
          {post && (<PostPage post={post}/>)}
        </section>
    )
}


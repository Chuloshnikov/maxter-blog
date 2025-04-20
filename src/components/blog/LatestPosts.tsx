"use client";

import { useQuery } from "@tanstack/react-query";
import PostItem from "./PostItem";
import Preloader from "../ui/Preloader";
import { PostInfo } from "@/models/Post";

async function fetchLatestPosts(): Promise<PostInfo[]> {
  const res = await fetch("/api/latestposts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const LatestPosts = ({ title }: { title: string }) => {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: fetchLatestPosts,
  });

  if (isLoading) return <Preloader />;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post) => (
        <PostItem key={String(post._id)} post={post} />
      ))}
    </div>
  );
};

export default LatestPosts;

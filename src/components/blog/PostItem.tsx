import DateConverter from "../ui/DateConverter";
import Link from "next/link";
import PostSkeleton from "../ui/PostSkeleton";
import { PostInfo } from "@/models/Post";

const PostItem = ({ post, title }: { post: PostInfo; title?: string }) => {
  if (!post) {
    return <PostSkeleton />;
  }

  return (
    <Link
      href={`/post/${String(post._id)}`}
      className="flex flex-col md:flex-row gap-4 justify-between mdl:items-center text-md font-medium p-2 hover:bg-accentBg/25"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-accentBg font-bold text-base leading-5 mdl:text-xl">
          {post.title}
        </h2>
        <div className="flex gap-2 text-gray-600 font-semibold flex-grow -mt-2">
          <span>author:</span>
          <span>{post.displayName ? post.displayName : post.username}</span>
        </div>
        {title && (
          <div className="text-gray-600 font-semibold -mt-2">
            Category: {post.slug}
          </div>
        )}
      </div>

      <span className="font-medium text-sm whitespace-nowrap flex-shrink-0">
        {DateConverter({ mongoDate: post.createdAt })}
      </span>
    </Link>
  );
};

export default PostItem;

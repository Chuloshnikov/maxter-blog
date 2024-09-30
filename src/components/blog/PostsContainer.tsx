import PostSkeleton from '../ui/PostSkeleton';
import PostItem from './PostItem'

const PostsContainer = ({posts, slug, loading}: any) => {
  return (
    <div className='border border-2 border-accentBg w-full mt-8'>
        <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">{slug}</h2>
        <div>
            {loading && (
                <>
                {Array.from({ length: 10 }).map((_, index) => (
                    <PostSkeleton key={index} />
                ))}
                </>
            )}
            {!posts.length && (
                <div className='w-full h-[400px] flex items-center  justify-center'>
                <div className='text-lg font-medium'>
                    No posts found
                </div>
            </div>
            )}
            {posts && [...posts].reverse().map(((post, index) => <PostItem key={index} post={post}/>))}
        </div>
    </div>
  )
}

export default PostsContainer;
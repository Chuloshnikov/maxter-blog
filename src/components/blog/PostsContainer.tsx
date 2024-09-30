import PostItem from './PostItem'

const PostsContainer = ({posts, slug}: any) => {
  return (
    <div className='border border-2 border-accentBg w-full mt-8'>
        <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">{slug}</h2>
        <div>
            {posts && [...posts].reverse().map(((post, index) => <PostItem key={index} post={post}/>))}
        </div>
    </div>
  )
}

export default PostsContainer;
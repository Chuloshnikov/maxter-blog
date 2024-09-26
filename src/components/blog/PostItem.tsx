import DateConverter from '../ui/DateConverter';
import Link from 'next/link';

interface PostItemProps {
    _id: string;
    title: string;
    slug: string;
    img: string;
}

const PostItem = ({post, title }: {post: PostItemProps, title: string}) => {

  return (
    <Link href={'/'} className='flex justify-between items-center text-md font-medium p-2 hover:bg-accentBg/25'>
        <div className='flex flex-col'>
            <h2 className='text-accentBg font-bold text-xl'>{post.title}</h2>
            <div className='flex gap-2 text-gray-600 font-semibold flex-grow -mt-2'>
                <span>author:</span>
                <span>John Doe</span>
            </div>
            {title && (
            <div className='text-gray-600 font-semibold -mt-2'>
                Category: {post.slug}
            </div>
        )}
        </div>
       
        <span className='font-medium text-sm'>{DateConverter(post.createdAt)}</span>
    </Link>
  )
}

export default PostItem;
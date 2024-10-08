import { findMostCommonCategory } from "@/lib/utils";
import { PostInfo } from "@/models/Post";

const PopularCategory = ({posts}: any) => {
  console.log(posts);
  return (
    <div className='border-2 border-gray-500 p-10'>
        <div className='flex items-center justify-center gap-2 text-2xl text-accentBg font-semibold'>
            <span>Most popular category:</span>
            <span className="capitalize">{findMostCommonCategory(posts)}</span>
        </div>
    </div>
  )
}

export default PopularCategory;
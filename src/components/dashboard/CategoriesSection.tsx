import { findMostCommonCategory } from "@/lib/utils";
import { PostInfo } from "@/models/Post";
import Link from "next/link";
import AllCategories from "./AllCategories";

const CategoriesSection = ({posts}: any) => {
  return (
    <div className='border-2 border-gray-500 p-10 flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2 text-2xl text-accentBg font-semibold'>
            <span>Most popular category:</span>
            <span className="capitalize">{findMostCommonCategory(posts)}</span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link 
          className="flex items-center max-w-max gap-2 justify-center py-4 px-8 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
          href={'/admin/categories/create'}
          >
              Create new category
          </Link>
          <AllCategories/>
        </div>
    </div>
  )
}

export default CategoriesSection;
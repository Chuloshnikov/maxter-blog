import Author from '@/components/dashboard/Author';
import TextCheckPage from '@/components/dashboard/TextCheckPage';
import { CommentsModel } from '@/models/Comment';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import Link from 'next/link';

import { FaArrowLeft } from "react-icons/fa";

export default async function CheckComment({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const comment = JSON.parse(JSON.stringify( await CommentsModel.findOne({_id: id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: comment?.authorId})));

  return (
    <div className='ml-10 flex flex-col gap-4'>
          <Link
            className="flex items-center gap-2 justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
            href={`/admin/comments`}>
            <FaArrowLeft/>
            <span>Back to comments</span>
          </Link>
         {user ? (<Author user={user}/>) : <div className='py-4 text-gray-500 font-semibold'>Author unknown...</div>}
        <TextCheckPage item={comment} text={comment.desc} action={"comments"}/>
    </div>
  )
}

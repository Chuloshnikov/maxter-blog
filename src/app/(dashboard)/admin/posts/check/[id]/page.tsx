import PostManager from '@/components/blog/PostManager';
import Author from '@/components/dashboard/Author';
import TextCheckPage from '@/components/dashboard/TextCheckPage';
import { PostInfoModel } from '@/models/Post';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';

export default async function CheckPost({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const post = JSON.parse(JSON.stringify( await PostInfoModel.findOne({_id: id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: post?.authorId})));

  return (
    <div className='ml-10'>
        {user ? (<Author user={user}/>) : <span className='py-4 text-gray-500 font-semibold'>Author unknown...</span>}
        <TextCheckPage item={post} title={post.title} text={post.desc} img={post.img} action={"posts"}/>
    </div>
  )
}

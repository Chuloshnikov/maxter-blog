import ItemsContainer from '@/components/dashboard/ItemsContainer';
import { PostInfoModel } from '@/models/Post';
import mongoose from 'mongoose';

export default async function Posts() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const allPosts = JSON.parse(JSON.stringify( await PostInfoModel.find()));
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <ItemsContainer 
       page={"posts"} 
       action={"check"} 
      items={allPosts.reverse()} 
      slug={"all posts"}
      />
    </div>
  )
}

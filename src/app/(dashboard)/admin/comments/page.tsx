import ItemsContainer from '@/components/dashboard/ItemsContainer';
import { CommentsModel } from '@/models/Comment';
import mongoose from 'mongoose';

export default async function Comments() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const allComments = JSON.parse(JSON.stringify( await CommentsModel.find()));
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <ItemsContainer 
       page={"comments"} 
       action={"check"} 
      items={allComments} 
      slug={"all comments"}
      />
    </div>
  )
}
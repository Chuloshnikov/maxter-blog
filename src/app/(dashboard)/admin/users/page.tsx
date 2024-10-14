import UsersContainer from '@/components/dashboard/users/UsersContainer';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';


export default async function Users() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const allProfiles = JSON.parse(JSON.stringify( await ProfileInfoModel.find()));

  return (
    <div className='flex flex-col gap-4 justify-between'>
      <div>
        <UsersContainer items={allProfiles} slug={"all users"}/>
      </div>
    </div>
  )
}

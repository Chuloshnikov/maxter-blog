import CommentsContainer from '@/components/blog/CommentsContainer';
import PostsContainer from '@/components/blog/PostsContainer';
import DeleteButton from '@/components/dashboard/DeleteButton';
import AdminSwitcher from '@/components/dashboard/users/AdminSwitcher';
import { CommentsModel } from '@/models/Comment';
import { PostInfoModel } from '@/models/Post';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import Image from 'next/image'
import { FaUserAlt } from 'react-icons/fa'


export default async function User({ params: { _id } }: { params: { _id: string } }) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({_id})));
  const userPosts = JSON.parse(JSON.stringify( await PostInfoModel.find({authorId: _id})));
  const userComments = JSON.parse(JSON.stringify( await CommentsModel.find({authorId: _id})));


  return (
    <div className='flex flex-col gap-8 xl:flex-row justify-evenly mx-2'>
    <div className='flex flex-col gap-4 mx-auto w-full xl:max-w-5xl mb-4 xl:mb-0'>
    <h3 className='text-4xl font-bold text-accentBg'>User profile</h3>
      <div className="relative h-64 mb-4 border-2 border-accentBg">
        {user?.coverUrl && (
          <Image
            src={user?.coverUrl || ''}
            alt="cover image"
            width={1024}
            height={1024}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="absolute left-4 -bottom-4 z-10 border-2 border-accentBg bg-gray-100 size-24">
          {user?.avatarUrl ? (
            <Image
              src={user?.avatarUrl || ''}
              width={120}
              height={120}
              className='w-full h-full object-cover'
              alt="avatar"
            />
          ) : (
            <FaUserAlt className='w-full h-full text-accentBg' />
          )}
        </div>
      </div>
      <div>
        <label className="input-label" htmlFor="usernameInput">user name</label>
        <input
          defaultValue={user?.username}
          disabled
          name="username"
          id="displaynameInput"
          type="text"
          placeholder="user name..."
        />
      </div>
      <div>
        <label className="input-label" htmlFor="displayNameInput">display name</label>
        <input
          defaultValue={user?.displayName}
          disabled
          name="displayName"
          id="displaynameInput"
          type="text"
          placeholder="display name..."
        />
      </div>
      <div>
        <label className="input-label" htmlFor="emailInput">email</label>
        <input
          defaultValue={user?.email}
          disabled
          name="email"
          id="emailInput"
          type="text"
          placeholder="email..."
        />
      </div>
      <div>
        <label className="input-label" htmlFor="bioInput">bio</label>
        <textarea
          defaultValue={user?.bio}
          rows={10}
          name="bio"
          disabled
          id="bioInput"
          placeholder="bio..."
        />
        <div className='flex justify-between mt-4'>
          <AdminSwitcher userId={user?._id} admin={user?.admin}/>
          <DeleteButton item={"user"} dir={"profile"} id={user?._id}/>
        </div>
        
      </div>
      <div className='mt-4'>
        <h3 className='text-4xl font-bold text-accentBg'>All user posts</h3>
        <PostsContainer posts={userPosts} slug={user?.displayName} />
      </div>
      <div className='mt-4'>
        <h3 className='text-4xl font-bold text-accentBg'>All user comments</h3>
        <CommentsContainer userComments={userComments} slug={user?.displayName}/>
      </div>
    </div>
  </div>
  )
}

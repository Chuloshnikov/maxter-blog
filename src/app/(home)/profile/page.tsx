"use server";

import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import { redirect } from "next/navigation";
import { PostInfoModel } from "@/models/Post";
import PostsContainer from "@/components/blog/PostsContainer";
import { UserModel } from "@/models/User";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const email = session.user.email;
  // await mongoose.connect(process.env.MONGODB_URI as string);
  const profileInfo = JSON.parse(
    JSON.stringify(await ProfileInfoModel.findOne({ email }))
  );

  const user = JSON.parse(JSON.stringify(await UserModel.findOne({ email })));

  // if user has no avatar, use user image
  const profileInfoDoc = {
    ...profileInfo,
    avatarUrl: profileInfo.avatarUrl || user.image,
  };

  const profilePosts = JSON.parse(
    JSON.stringify(await PostInfoModel.find({ userEmail: email }))
  );

  return (
    <section className="max-w-2xl min-h-[calc(100vh-21.1rem)] mx-auto px-4 mt-4">
      <ProfileInfoForm profileInfo={profileInfoDoc} />
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-accentBg">Your posts:</h3>
        <PostsContainer
          posts={profilePosts}
          slug={profileInfoDoc?.displayName}
        />
      </div>
    </section>
  );
}

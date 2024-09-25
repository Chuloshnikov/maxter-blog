"use server"

import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";
import { ProfileInfoModel } from "@/models/ProfileInfo";


export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return 'Not logged in';
  }

  const email = session.user.email;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const profileInfoDoc = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({email})));

  return (
    <section className="max-w-2xl min-h-[calc(100vh-21.1rem)] mx-auto px-4 mt-4">
        <ProfileInfoForm profileInfo={profileInfoDoc}/>
        <div>
           your blogs...
        </div>
    </section>
  )
}

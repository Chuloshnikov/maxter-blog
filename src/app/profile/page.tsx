"use server"

import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";


export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return 'Not logged in';
  }

  const email = session.user.email;

  return (
    <section className="max-w-2xl h-[calc(100vh-21.1rem)] mx-auto px-4 mt-4">
        <ProfileInfoForm/>
        <div>
           your blogs...
        </div>
    </section>
  )
}

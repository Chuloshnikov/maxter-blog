"use server"

import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";


export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return 'Not logged in';
  }

  const email = session.user.email;

  return (
    <section className="max-w-2xl mx-auto px-4 mt-4">
      <div className="bg-gray-200 p-4">test
        <div className="bg-gray-300 size-24 p-4">avatar</div>
      </div>
        <div>cover image</div>
        <div>
          <input type="text" placeholder="username"/>
        </div>
        <div>
          <input type="text" placeholder="display name"/>
        </div>
        <textarea name="" placeholder="bio"></textarea>
        <div>
          <button>Save profile</button>
        </div>
        <div>
           your blogs...
        </div>
    </section>
  )
}

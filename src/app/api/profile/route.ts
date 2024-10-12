import { authOptions } from "@/lib/authOptions";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { userId, isAdmin } = await request.json();
  
  // Проверка на валидность данных
  if (!userId || typeof isAdmin === 'undefined') {
    return NextResponse.json({ message: 'Invalid request data' }, { status: 400 });
  }

  // Подключение к базе данных
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }

  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const email = session.user.email;
    const profile = await ProfileInfoModel.findOne({ email });
    
    if (profile && profile.admin) {
      const adminSwitch = await ProfileInfoModel.findByIdAndUpdate(userId, { admin: isAdmin }, { new: true });
      
      if (!adminSwitch) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }

      return NextResponse.json(adminSwitch);
    } else {
      return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error updating user admin status:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
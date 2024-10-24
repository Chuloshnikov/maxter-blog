import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import Category from '@/models/Category';
import {getServerSession} from "next-auth";
import { authOptions } from '@/lib/authOptions';
import { ProfileInfoModel } from '@/models/ProfileInfo';

export async function GET() {
await mongoose.connect(process.env.MONGODB_URI as string);
const categories = await Category.find({});
return NextResponse.json(categories);
}

export async function POST(request: Request) {
await mongoose.connect(process.env.MONGODB_URI as string);

const { title, imgUrl } = await request.json();

try {
    const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));
    
    if (!session) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const email = session.user.email;
    const profile = await ProfileInfoModel.findOne({ email });
    
    if (profile && profile.admin) {
      const categoryDoc = await Category.create({title, img: imgUrl, slug: title });
      return NextResponse.json(categoryDoc);
    } else {
      return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }

}


export async function PUT(request: Request) {
    await mongoose.connect(process.env.MONGODB_URI as string);

    const { title, imgUrl, id } = await request.json();

    try {
        const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));
        
        if (!session) {
          return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
        }
    
        const email = session.user.email;
        const profile = await ProfileInfoModel.findOne({ email });
        
        if (profile && profile.admin) {
          const categoryDoc = await Category.findByIdAndUpdate( id, {title, img: imgUrl, slug: title }, { new: true });
          return NextResponse.json(categoryDoc);
        } else {
          return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
        }
      } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
    

}

export async function DELETE(request: Request) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));;

    const email = session.user.email;
    const profile = await ProfileInfoModel.findOne({ email });
    const url = new URL(request.url);
    const _id = url.searchParams.get('_id');
    if (profile && profile.admin) {
      await Category.deleteOne({ _id });
      return NextResponse.json({ message: 'Category deleted successfully' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  }
import { NextResponse, NextRequest } from 'next/server';
import mongoose from "mongoose";
import { SubmittersModel } from '@/models/Submitters';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { ProfileInfoModel } from '@/models/ProfileInfo';


export async function GET() {
    await mongoose.connect(process.env.MONGODB_URI as string);
    try {
        const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));
    
        if (!session) {
        return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
        }

        const email = session.user.email;
        const profile = await ProfileInfoModel.findOne({ email });

        if (profile && profile.admin) {
            const submitters = await SubmittersModel.find();      
            return NextResponse.json(submitters);
          } else {
            return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
          }
    } catch (error) {
        console.error('Error updating user admin status:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}



export async function POST(request: NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    try {
        const data = await request.json();
        console.log(data);

        const createSubmitter = await SubmittersModel.create({email: data});

        return NextResponse.json(createSubmitter);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create submitter', details: error }, { status: 500 });
    }
}

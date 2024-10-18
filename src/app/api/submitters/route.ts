import { NextResponse, NextRequest } from 'next/server';
import mongoose from "mongoose";
import { SubmittersModel } from '@/models/Submitters';



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

import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import Category from '@/models/Category';

export async function GET() {
await mongoose.connect(process.env.MONGODB_URI as string);
const categories = await Category.find({});
return NextResponse.json(categories);
}

export async function POST() {

}
"use server"

import { parseStringify } from "@/lib/utils";
import { CommentsModel } from "@/models/Comment";
import mongoose from "mongoose";

export async function getAllComments() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        const commentsDoc = await CommentsModel.find();
        return parseStringify(commentsDoc);
      } catch (error) {
        console.error(
          "An error occurred while retrieving the patient details:",
          error
        );
      }
}

export async function getUserComments({userId}: {userId: FormDataEntryValue}) {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const commentsDoc = await CommentsModel.find({authorId: userId});
    return parseStringify(commentsDoc);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
}
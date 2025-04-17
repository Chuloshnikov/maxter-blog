'use server';
import { getUserSession } from "@/lib/getUserSession";
import { parseStringify } from "@/lib/utils";
import { PostInfoModel } from "@/models/Post";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import { dbConnect } from "@/lib/dbConnect";


export async function createPost(formData: FormData) {
  await dbConnect();
  const { email } = await getUserSession();

  const {
    title, desc, postImg, slug
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({ email });
  if (!profileInfoDoc) throw new Error('Profile not found');
  const { username, displayName, avatarUrl, _id } = profileInfoDoc;

  const author = displayName || username;

  await PostInfoModel.create({
    title,
    desc,
    slug,
    catSlug: slug,
    username,
    displayName: author,
    userEmail: email,
    authorId: _id,
    img: postImg,
    avatarUrl
  });
}

export async function getPosts() {
  try {
    await dbConnect();
    const { email } = await getUserSession();
    const profileInfoDoc = await ProfileInfoModel.findOne({ email });
    if (!profileInfoDoc) throw new Error('Profile not found');
    const postsDoc = await PostInfoModel.find({ userEmail: email });
    return parseStringify(postsDoc);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the posts:",
      error
    );
  }
}

export async function getAllPosts() {
  try {
    await dbConnect();
    const postsDoc = await PostInfoModel.find();
    return parseStringify(postsDoc);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
}
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function getUserSession() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    throw new Error("You need to be logged in");
  }
  return { session, email: session.user.email };
}

import clientPromise from "@/lib/db";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
      ],
  adapter: MongoDBAdapter(clientPromise),
} as AuthOptions;
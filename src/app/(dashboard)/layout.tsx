import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";


import {authOptions} from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { AppProvider } from "@/components/AppProvider";

import { Toaster } from "react-hot-toast";

import DashboardWrapper from "../../components/dashboard/DashboardWrapper";
import mongoose from "mongoose";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import Link from "next/link";




const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Maxter",
  description: "Maxter blog. Blog about IT and more. Here you can abandon sanctimonious morality, all prohibitions, and simply let your thoughts flow"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = JSON.parse(JSON.stringify(await getServerSession(authOptions)));
  const email = session.user.email;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const profile = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({email})));


  return (
    <html lang="en">
      <body className={`${lato.className}`}>
            <Toaster/>
            <AppProvider>
              {profile.admin ? (
                <DashboardWrapper>
                  <main className="max-w-contentContainer min-h-[calc(100vh-21.1rem)] mx-auto">
                    {children}
                  </main>    
              </DashboardWrapper>
              ) : (
                <div className="flex w-screen h-screen">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <h4 className="text-accentBg font-bold text-7xl -mt-10">
                          Not an Admin
                        </h4>
                        <Link 
                        className="submitButton mt-4"
                        href={'/'}
                        >
                          Back to blog
                        </Link>
                    </div>
                </div>
              )}
            </AppProvider>
      </body>
    </html>
  );
}

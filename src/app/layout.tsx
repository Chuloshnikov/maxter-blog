import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import {authOptions} from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { AppProvider } from "@/components/AppProvider";
import { Toaster } from "react-hot-toast";

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

  return (
    <html lang="en">
      <body className={`${lato.className}`}>
      <Toaster/>
        <Header session={session}/>
        <AppProvider>
          <main className="max-w-contentContainer min-h-[calc(100vh-21.1rem)] mx-auto">
            {children}
          </main>    
        </AppProvider>
        <Footer/>
      </body>
    </html>
  );
}

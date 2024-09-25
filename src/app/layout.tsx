import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import {authOptions} from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { AppProvider } from "@/components/AppProvider";

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
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Header session={session}/>
        <AppProvider>
              {children}
        </AppProvider>
        <Footer/>
      </body>
    </html>
  );
}

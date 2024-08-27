import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Maxter",
  description: "Maxter blog. Blog about IT and more. Here you can abandon sanctimonious morality, all prohibitions, and simply let your thoughts flow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} max-w-contentContainer mx-auto`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}

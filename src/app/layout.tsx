import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School Ui",
  description: "Music School Website Ui using Next js and Aceternity Ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full justify-center flex items-center">
          <Navbar />
        </div>
        {children}
        <div className="w-full justify-center flex items-center">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

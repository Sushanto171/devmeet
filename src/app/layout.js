import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevMeet",
  description: "DevMeet - Developer Knowledge Sharing Hub",
  authors: [
    { name: "Sushanto Kumar" },
    { name: "Md Reaz Morshed" },
    { name: "Rakib Hossen" },
    { name: "Miftahul Jannat" },
  ],
  keywords: ["React", "JavaScript", "Next.js", "Web Development", "Programming", "Developer Community"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <div className="min-h-[400px]">{children}</div>
        <Footer></Footer>
      </body>
    </html> 
  );
}

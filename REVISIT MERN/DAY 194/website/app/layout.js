import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "nextjs-website - 194",
  description: "A Next.js website with a custom layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      data-arp="" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-[90vh] container mx-auto px-4">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

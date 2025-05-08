import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Logout",
    description: "Admin Page : Facebook helps you connect and share with the people in your life.",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>logout Navbar</span>
            {children}
        </>
    );
}

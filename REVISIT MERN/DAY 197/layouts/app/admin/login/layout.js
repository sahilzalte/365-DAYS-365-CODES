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
    title: " Admin - Facebook - Connect with friends and the world around you on Facebook",
    description: " Admin - Facebook is a social networking site that makes it easy for you to connect and share with family and friends online.",
};

export default function AdminLayout({ children }) {
    return (
        <>
        <span>Admin Navbar</span>
            {children}
        <span>Admin Footer</span>
        </>


    );
}

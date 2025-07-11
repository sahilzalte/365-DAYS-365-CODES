import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <div className="font-bold text-lg">MyWebsite</div>
            <ul className="flex list-none gap-6 m-0 p-0">
                <li>
                    <Link href="/" className="text-white no-underline hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white no-underline hover:underline">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white no-underline hover:underline">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <main className='bg-purple-100 text-gray-800 min-h-screen'>
            <section className='max-w-5xl mx-auto py-16 px-6 flex flex-col gap-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold mb-4 text-purple-700'>About UShort</h1>
                    <p className='text-lg text-gray-700'>
                        UShort is a fast, privacy-friendly, and reliable URL shortener designed to simplify your digital life. Whether you're sharing links on social media, messaging apps, or emails, UShort makes it easier and cleaner.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-bold text-purple-600'>Why Choose UShort?</h2>
                        <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                            <li><strong>No Login Required:</strong> Start shortening URLs instantly without creating an account.</li>
                            <li><strong>Custom Short Links:</strong> Create personalized and memorable short URLs.</li>
                            <li><strong>Privacy Focused:</strong> We don’t track you or your users — ever.</li>
                            <li><strong>Fast & Reliable:</strong> Built with modern technologies for blazing-fast performance.</li>
                        </ul>
                    </div>
                    <div className='relative w-full h-64 md:h-80'>
                        <Image
                            src="/Vector.jpg"
                            alt="Illustration"
                            layout="fill"
                            objectFit="contain"
                            className="mix-blend-darken"
                            priority
                        />
                    </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                    <h3 className='text-xl font-semibold mb-2 text-purple-700'>Open Source & Developer Friendly</h3>
                    <p className='text-gray-700 mb-4'>
                        UShort is proudly open-source. Check out the source code, contribute, or customize your own version.
                    </p>
                    <Link href="https://github.com/Sahilzalte" target='_blank'>
                        <button className='bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-600 transition duration-200'>
                            View on GitHub
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default AboutPage

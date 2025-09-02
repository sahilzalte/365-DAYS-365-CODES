import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" />
          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>
          <ul className='flex gap-8'>
            <li><a className='hover:text-primary' href="#hero">Home</a></li>
            <li><a className='hover:text-primary' href="#services">Services</a></li>
            <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
            <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2 text-sm'>
            <input type="email" placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
            <button className='bg-primary text-white rounded px-6'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/* Footer Bottom */}
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2025 &copy; Sahil | All Rights Reserved</p>
        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer

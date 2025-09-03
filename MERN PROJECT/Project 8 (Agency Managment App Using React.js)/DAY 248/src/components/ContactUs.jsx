import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "5ba1f508-dc23-4f6a-a046-2ba90ebad0c1");
        try {

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!");
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }

    };
    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="email" placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name='message' rows={8} placeholder='Enter Your Message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>
            </form>
        </div>
    )
}

export default ContactUs

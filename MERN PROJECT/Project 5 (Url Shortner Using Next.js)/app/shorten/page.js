'use client'
import React from 'react'
import { useState } from 'react'


const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [generated, setgenerated] = useState(false)


    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4' >
            <h1 className='font-bold text-2xl'>
                Generate your short URLs
            </h1>
            <div className='flex flex-col gap-5'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md'
                    placeholder='Enter Your URL'
                    onChange={e => { seturl(e.target.value) }} />
                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md'
                    placeholder='Enter Your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white cursor-pointer'>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
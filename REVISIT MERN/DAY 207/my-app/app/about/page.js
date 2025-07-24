'use client'
import React from 'react'

const about = () => {
    return (
        <div>

            <div className='container'>
                <h1>This is about me</h1>
                <p>Hey I am good boy</p>

                <style jsx global>{`
            .container{
                background-color: #f0f0f0;
                padding: 20px;
                color: red;
                }
                `}
                </style>
            </div>

            <div className="container">2nd Container</div>
        </div>
    )
}

export default about
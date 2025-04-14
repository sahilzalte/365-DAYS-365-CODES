import React from 'react'
import Footer from './Footer'

const navbar = (prom) => {
    return (
        <div>
            <div className="logo">
                {prom.logoText}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <Footer />
        </div>
    )
}

export default navbar

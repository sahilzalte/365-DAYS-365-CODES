import React from 'react'

const page = () => {
    return (
        <div>
            Admin Login Page
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Forgot Password?</p>
        </div>
    )
}

export default page
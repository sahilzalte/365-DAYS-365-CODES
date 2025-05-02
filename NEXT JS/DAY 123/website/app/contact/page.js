import React from 'react'
import Script from 'next/script'

const Contact = () => {
    return (
        <div>
            <script>
                {`alert("Welcome To contact page")`}
            </script>
            Contact
        </div>
    )
}

export default Contact

export const metadata = {
    title: " Contact Facebook - Connect with the world",
    description: "This is Contact facebook and we can connect with the world using facebook",
};
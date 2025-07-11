import React from 'react'
import Script from 'next/script';

export const metadata = {
    title: "contact - nextjs-website - 194",
    description: "A contact website with a custom layout",
};
const page = () => {
    return (
        <div>
            <Script>
                {`
                    alert('hello')
               `  }
            </Script>

            Contac page
        </div>
    )
}

export default page
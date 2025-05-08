import React from 'react'

const page = () => {
  return (
    <div>
      Admin login
      <p>This is admin login</p>
    </div>
  )
}

export default page


// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Admin  Login Facebook - Connect with friends and the world around you',
  }
}
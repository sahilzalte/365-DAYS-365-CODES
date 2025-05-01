import Navbar from "@/components/Navbar"
// import { useState, useEffect } from "react"

// import fs from 'fs/promises'

export default function Home() {
  // // const [count, setcount] = useState(0)
  // console.log("I am a Sahil")
  // let a = fs.readFile('./sahil.txt')
  // a.then(e => {
  //   console.log(e.toString())
  // })

  return (
    <div>
      I am a Component
      <Navbar />
      {/* {count} */}
      {/* <button onClick={() => setcount(count + 1)}>Click me</button> */}
    </div >
  )
}

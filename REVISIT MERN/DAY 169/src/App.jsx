import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('Sahil')
  const [form, setForm] = useState({
    email: '',
    phone: ''
  })

  const handleclick = () => {
    alert("Hey I am clicked")
  }

  const handleMouseOver = () => {
    alert("Hey I am MouseOver")
  }

  const handleChange = (event) => {
    // setName(event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>
          Click me
        </button>
        {/* <div className="red" onMouseOver={handleMouseOver}>
          I am red div
        </div> */}
      </div>
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App

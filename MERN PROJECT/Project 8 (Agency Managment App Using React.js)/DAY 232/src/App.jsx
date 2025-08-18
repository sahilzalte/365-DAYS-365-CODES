import { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <div className='dark:bg-black relative'>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './Redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}> - </button>
        count is {count}
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(multiply())}> * </button>
      </div>
    </>
  )
}

export default App

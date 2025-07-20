import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    desc: 'Learn React from scratch',
  }, {
    title: 'Learn js',
    desc: 'Learn js from scratch',
  }, {
    title: 'Learn py',
    desc: 'Learn py from scratch',
  }])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className='border-2 border-gray-500 rounded-lg p-4 m-4'>
  //       <div className='text-2xl font-bold'>
  //         {todo.title}
  //       </div>
  //       <div className='text-lg font-semibold'>
  //         {todo.desc}
  //       </div>
  //     </div>
  //   </>)
  // }


  return (
    <>
      {
        todos.map(todo => {
          // return <Todo todo={todo} key={todo.title} />

          return (<>
            <div key={todo.title} className='border-2 border-gray-500 rounded-lg p-4 m-4'>
              <div className='text-2xl font-bold'>
                {todo.title}
              </div>
              <div className='text-lg font-semibold'>
                {todo.desc}
              </div>
            </div>
          </>)
        }

        )
      }

    </>
  )
}

export default App

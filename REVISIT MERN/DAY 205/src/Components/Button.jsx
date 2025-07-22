import React from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'
import { useContext } from 'react'

const Button = () => {
    const value = useContext(counterContext)
    return (
        <div>
            <button  onClick={() => value.setCount((count) => count - 1)}>
                <span>
                    <Component1 />
                    I am a Button
                </span>
            </button>
        </div>
    )
}

export default Button
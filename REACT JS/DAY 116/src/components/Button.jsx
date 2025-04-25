import React from 'react'
import { useContext } from 'react'
import { Component1 } from './Component1'
import { Context } from '../context/context1'

export const Button = () => {
    const value = useContext(Context)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}><span><Component1 /></span>I am a button</button>
        </div>
    )
}

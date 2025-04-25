import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/context1'
export const Component1 = ({ count }) => {

    const value = useContext(Context)

    return (
        <div>{value.count}</div>
    )
}

import React from 'react'
import { Button } from './Button'

export const Navbar = ({ count }) => {
    return (
        <>
            <div>Navbar</div>
            <Button count={count} />
        </>
    )
}

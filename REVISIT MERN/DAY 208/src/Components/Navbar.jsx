import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>Navbar
            and Counter: {count}
        </div>
    )
}

export default Navbar
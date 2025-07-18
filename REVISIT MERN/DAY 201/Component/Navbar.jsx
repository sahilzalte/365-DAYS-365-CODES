import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // Case 1 :Run on every render
    useEffect(() => {
        alert('hey welcome to the app! Every render')
    })

    // Case 2 : Run only on first render
    useEffect(() => {
        alert('first render')
    }, [])

    // Case 3 :run only when certain values change
    useEffect(() => {
        alert('Hey I am changing the color of navbar')
    }, [color])

    // Example of cleanup function
    useEffect(() => {
        alert('first render of app.jsx')
        return () => {
            alert('Component was Unmounted')
        }
    }, [])
    
    return (
        <div>Navbar of {color}</div>
    )
}

export default Navbar
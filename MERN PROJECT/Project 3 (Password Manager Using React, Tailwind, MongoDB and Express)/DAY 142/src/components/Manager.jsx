import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
        // else {
        //     PasswordArray = []
        // }
    }, [])


    const showPassword = () => {
        alert('show password')
        if (ref.current.src.includes('/public/delete.png')) {
            ref.current.src = '/public/eye.png'
        }
        else {
            ref.current.src = '/public/delete.png'
        }
    }


    const savePassword = () => {
        console.log(form)
        setpasswordArray([...passwordArray, form])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)

    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mycontainer">

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>

                <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-8 items-center">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='1' />
                    <div className="flex w-full justify-between gap-8">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='2' />

                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" name='password' id='3' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer'
                                onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="/public/eye.png" alt="show" /></span>

                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 hover:bg-green-300 bg-green-400 rounded-full px-8 py-2 w-fit border-2 border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>

                </div>

                <div className="passwords">

                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>

                    {passwordArray.length === 0 && <div> No passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">

                        <thead className='bg-green-800 text-white'>

                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                            </tr>

                        </thead>

                        <tbody className='bg-green-100'>

                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='py-2 border-white text-center w-32'><a href={item.site} target='_blank'>{item.site}</a></td>
                                    <td className='py-2 border-white text-center w-32'>{item.username}</td>
                                    <td className='py-2 border-white text-center w-32'>{item.password}</td>

                                </tr>
                            })}

                        </tbody>

                    </table>
                    }

                </div>

            </div>
        </>
    )
}

export default Manager
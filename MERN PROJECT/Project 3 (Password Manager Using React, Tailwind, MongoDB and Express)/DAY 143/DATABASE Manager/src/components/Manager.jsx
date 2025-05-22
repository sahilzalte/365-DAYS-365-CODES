import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Slide } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    const getpasswords = async () => {
        let req = await fetch('http://localhost:3000/')
        let passwords = await req.json()
        console.log(passwords)
        setpasswordArray(passwords)

    }


    useEffect(() => {
        getpasswords()

    }, [])


    const showPassword = () => {
        passwordRef.current.type = 'text'
        if (ref.current.src.includes('/public/delete.png')) {
            ref.current.src = '/public/eye.png'
            passwordRef.current.type = 'password'
        }
        else {
            ref.current.src = '/public/delete.png'
            passwordRef.current.type = 'text'
        }
    }


    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 5) {

            // If any such id exists in the db , delete it
            await fetch('http://localhost:3000/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: form.id })
            })


            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            // localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...form, id: uuidv4() })
            })
            setForm({ site: "", username: "", password: "" })
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            })
        }
        else {
            toast.warning();
            toast('Please fill all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            })
        }

    }

    const deletePassword = async (id) => {
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        if (confirm("Are you sure you want to delete this password?")) {
            // localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
            let req = await fetch('http://localhost:3000/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            toast.dismiss();
            toast('Deleted Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            })

            // console.log(passwordArray)
        }

    }

    const editPassword = (id) => {
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.dismiss();
                toast('Copied Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                toast.error('Failed to copy text!');
            });
    };

    return (

        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" p-3 md:mycontainer min-h-[88.2vh] mycontainer
            ">

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>

                <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-8 items-center">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='password' />
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
                        Save</button>

                </div>

                <div className="passwords">

                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>

                    {passwordArray.length === 0 && <div> No passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">

                        <thead className='bg-green-800 text-white'>

                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                                <th className='py-2'>Actions</th>
                            </tr>

                        </thead>

                        <tbody className='bg-green-100'>

                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center ' >
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center ' >
                                            <span> {item.username} </span>

                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='  py-2 border-white text-center border '>
                                        <div className='flex items-center justify-center ' >
                                            <span> {'*'.repeat(item.password.length)} </span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='justify-center py-2 border border-white text-center '>
                                        <span className='cursor-pointer mx- ' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>

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
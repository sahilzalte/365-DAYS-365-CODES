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

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        if (ref.current.src.includes('delete.png')) {
            ref.current.src = '/eye.png';
            passwordRef.current.type = 'password';
        } else {
            ref.current.src = '/delete.png';
            passwordRef.current.type = 'text';
        }
    };


    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 5) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
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
            toast.dismiss();
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

    const deletePassword = (id) => {
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        if (confirm("Are you sure you want to delete this password?")) {
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
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

        setForm(passwordArray.filter(i => i.id === id)[0])
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

            <div className="absolute inset-0 -z-10 h-full w-full bg-emerald-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className=" p-3 md:mycontainer min-h-[88.2vh] mycontainer
            ">

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-emerald-500'>&lt;</span>
                    Pass
                    <span className='text-emerald-500'>OP/&gt;</span>
                </h1>

                <p className='text-emerald-900 text-lg text-center '>Your own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-8 items-center">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='bg-white rounded-full border border-emerald-500 w-full p-4 py-1' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-full border border-emerald-500 w-full p-4 py-1' type="text" name='username' id='username' />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-full border border-emerald-500 w-full p-4 py-1' type="password" name='password' id='password' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer'
                                onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="eye.png" alt="show" /></span>

                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 hover:bg-emerald-400 bg-emerald-300 rounded-full px-8 py-2 w-fit border-2 border-emerald-900 cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover">
                        </lord-icon>
                        Save</button>

                </div>

                <div className="passwords">

                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>

                    {passwordArray.length === 0 && <div> No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <div className="overflow-x-auto">
                            <table className="table-auto min-w-[700px] w-full rounded-md overflow-hidden mb-10">
                                <thead className='bg-emerald-800 text-white'>
                                    <tr>
                                        <th className='py-2 px-4'>Site</th>
                                        <th className='py-2 px-4'>Username</th>
                                        <th className='py-2 px-4'>Password</th>
                                        <th className='py-2 px-4'>Actions</th>
                                    </tr>
                                </thead>

                                <tbody className='bg-emerald-100'>
                                    {passwordArray.map((item, index) => (
                                        <tr key={index}>
                                            <td className='py-2 px-4 border border-white text-center max-w-[200px] truncate'>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <a href={item.site} target='_blank' className="truncate max-w-[150px]" title={item.site}>{item.site}</a>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)}>
                                                        <lord-icon
                                                            style={{ width: "25px", height: "25px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='py-2 px-4 border border-white text-center max-w-[150px] truncate'>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <span className="truncate">{item.username}</span>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
                                                        <lord-icon
                                                            style={{ width: "25px", height: "25px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='py-2 px-4 border border-white text-center'>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <span>{'*'.repeat(item.password.length)}</span>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                        <lord-icon
                                                            style={{ width: "25px", height: "25px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='py-2 px-4 border border-white text-center'>
                                                <div className="flex justify-center gap-2">
                                                    <span className='cursor-pointer' onClick={() => editPassword(item.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}>
                                                        </lord-icon>
                                                    </span>
                                                    <span className='cursor-pointer' onClick={() => deletePassword(item.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}>
                                                        </lord-icon>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}

export default Manager
import React, { useEffect, useState } from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom'
import { set } from 'zod'

const Task = ({ props, onDelete }) => {
    const [badgeColor, setBadgeColor] = useState()
    useEffect(() => {
        if (props.status === 'Pending') {
            setBadgeColor('blue')
        }
        else if (props.status === 'Running') {
            setBadgeColor('yellow')
        }
        else if (props.status === 'Completed') {
            setBadgeColor('green')
        }
        else if (props.status === 'Failed') {
            setBadgeColor('red')
        }
    }, [props.status])

    const handleDelete = async () => {
        await onDelete(props._id)
    }

    return (
        <div>

            <div className="border p-3 rounded-md mb-5">
                <h3 className="text-lg font-semibold">
                    <span className="me-2">
                        {props.title}
                    </span>
                    <Badge props={{ color: badgeColor, text: props.status }} />
                </h3>
                <p className="line-clamp-2 mb-3">
                    {props.description}
                </p>
                <div className="flex gap-5 items-center">
                    <Link to={`/show-task/${props._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center inline-flex items-center p-2">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </Link>
                    <button onClick={handleDelete} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  text-center inline-flex items-center p-2">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Task
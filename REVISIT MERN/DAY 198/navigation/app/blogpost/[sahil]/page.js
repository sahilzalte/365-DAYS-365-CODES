'use client'
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'


const page = () => {
    const params = useParams()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard')
        }, 2333);
    }, [])
    return (
        <>
            <div>{params.sahil}</div>
            <button type="button" onClick={() => router.push('/dashboard')}>Dashboard</button>
        </>
    )
}

export default page
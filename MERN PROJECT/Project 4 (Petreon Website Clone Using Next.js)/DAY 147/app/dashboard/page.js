'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'
const DashboardPage = () => {
  
    return (
        <Dashboard/>
    )
}

export default DashboardPage
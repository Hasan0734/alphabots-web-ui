
import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'


interface ChildrenType {
  children: React.ReactNode
}


export default function PublicRoute({children}:ChildrenType) {
    const auth = useAuth()
  return (
    !auth ? <>{children}</> : <Navigate to='/' />
  )
}

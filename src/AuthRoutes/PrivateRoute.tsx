import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './../hooks/useAuth'


interface ChildrenType {
  children: React.ReactNode
}

const PrivateRoute = ({ children }:ChildrenType) => {
  const auth = useAuth()

  return (
    auth ? <>{children}</> : <Navigate to='/login' />
  )
}

export default PrivateRoute

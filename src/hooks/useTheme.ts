import React from 'react'
import { useSelector } from 'react-redux'

const useTheme = () => {
  const { theme } = useSelector((state:any) => state.global)
  if (theme === 'dark') {
    return true
  } else {
    return false
  }
}

export default useTheme



import { useSelector } from 'react-redux'

const useAuth = () => {
  const auth = useSelector((state:any) => state.auth)

  if (auth?.user?._id) {
    return true
  } else {
    return false
  }
}

export default useAuth

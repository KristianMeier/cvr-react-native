import { useRouter } from 'expo-router'
import { MYACCOUNT_PATH } from '../constants'
import { useAuthContext, AuthContextProps } from '../context'
import { AuthComponent } from '../components/AuthComponent'
import { useEffect } from 'react'

const Register = () => {
  const { registerUser, createTable } = useAuthContext() as AuthContextProps

  const router = useRouter()

  useEffect(() => {
    createTable()
  }, [])

  return (
    <AuthComponent
      header="Register an account"
      onPressLeft={registerUser}
      btnTextLeft="Register User"
      onPressRight={() => router.push(MYACCOUNT_PATH)}
      btnTextRight="Go to Login Screen"
    />
  )
}

export default Register

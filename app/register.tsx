import { MYACCOUNT_PATH } from '../constants'
import { useAuthContext, AuthContextProps } from '../context'
import { AuthComponent } from '../components/AuthComponent'
import { useEffect } from 'react'

const Register = () => {
  const { registerUser, createTable, clearAuthInfo } =
    useAuthContext() as AuthContextProps

  useEffect(() => {
    createTable()
  }, [])

  return (
    <AuthComponent
      header="Register an account"
      onPressLeft={registerUser}
      btnTextLeft="Register User"
      onPressRight={() => clearAuthInfo(MYACCOUNT_PATH)}
      btnTextRight="Go to Login Screen"
    />
  )
}

export default Register

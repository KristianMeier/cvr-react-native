import { useRouter } from 'expo-router'
import { MYACCOUNT_PATH } from '../constants'
import { useAuthContext, AuthContextProps } from '../context'
import { AuthComponent } from '../components/AuthComponent'

const Register = () => {
  const { registerUser } = useAuthContext() as AuthContextProps

  const router = useRouter()

  return (
    <AuthComponent
      onPressLeft={registerUser}
      btnTextLeft="Register"
      onPressRight={() => router.push(MYACCOUNT_PATH)}
      btnTextRight="Login Screen"
    />
  )
}

export default Register

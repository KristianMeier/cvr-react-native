import { useEffect } from 'react'
import GatedContent from './'
import { useRouter } from 'expo-router'
import { AuthContextProps, useAuthContext } from '../context'
import { REGISTER_PATH } from '../constants'
import { AuthComponent } from '../components/AuthComponent'

const MyAccount = () => {
  const { createTable, isLoggedIn, loginUser } =
    useAuthContext() as AuthContextProps
  const router = useRouter()

  useEffect(() => {
    createTable()
  }, [])

  if (isLoggedIn) return <GatedContent />

  return (
    <AuthComponent
      header="Log in beneath"
      onPressLeft={loginUser}
      btnTextLeft="Login"
      onPressRight={() => router.push(REGISTER_PATH)}
      btnTextRight="Register"
    />
  )
}

export default MyAccount

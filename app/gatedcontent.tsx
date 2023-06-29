import { MYACCOUNT_PATH } from '../constants'
import { GatedWrapper } from '../components'
import { AuthContextProps, useAuthContext } from '../context'
import { useRouter } from 'expo-router'

const GatedContent = () => {
  const { isLoggedIn, logOut } = useAuthContext() as AuthContextProps
  const router = useRouter()

  if (isLoggedIn)
    return (
      <GatedWrapper
        header="You are logged in"
        onPress={logOut}
        buttonText="Log Out"
      />
    )

  return (
    <GatedWrapper
      header="You are not logged in"
      onPress={() => router.push(MYACCOUNT_PATH)}
      buttonText="Log In"
    />
  )
}

export default GatedContent

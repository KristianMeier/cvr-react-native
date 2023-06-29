import { GatedWrapper } from '../components'
import { AuthContextProps, useAuthContext } from '../context'
import { useRouter } from 'expo-router'

const GatedContent = () => {
  const { isLoggedIn, logOut } = useAuthContext() as AuthContextProps
  const router = useRouter()

  if (isLoggedIn)
    return (
      // @ts-ignore
      <GatedWrapper
        // @ts-ignore
        header="You are logged in"
        onPress={logOut}
        buttonText="Log Out"
      />
    )

  return (
    <GatedWrapper
      // @ts-ignore
      header="You are not logged in"
      onPress={() => router.push('/login')}
      buttonText="Log In"
    />
  )
}

export default GatedContent

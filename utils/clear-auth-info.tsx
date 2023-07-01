import { useAuthContext, AuthContextProps } from '../context'
import { useRouter } from 'expo-router'

export const clearAuthInfo = (path: string) => {
  const { setUsername, setPassword } = useAuthContext() as AuthContextProps
  const router = useRouter()

  setUsername('')
  setPassword('')
  router.push(path)
}

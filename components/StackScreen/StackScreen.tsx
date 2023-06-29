import { VIRKOPEDIA_PATH } from '../../constants'
import { Stack, useRouter } from 'expo-router'
import { HeaderButton } from './HeaderButton'

export const StackScreen = () => {
  const router = useRouter()

  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: '#fff' },
        headerShadowVisible: false,
        headerLeft: () => (
          <HeaderButton
            buttonText="Go back"
            onPress={() => router.back()}
          />
        ),
        headerRight: () => (
          <HeaderButton
            buttonText="My Account"
            onPress={() => router.push(VIRKOPEDIA_PATH)}
          />
        ),
        headerTitle: () => '',
      }}
    />
  )
}

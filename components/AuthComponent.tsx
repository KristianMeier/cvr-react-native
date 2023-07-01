import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useMessageRenderer } from '../hooks'
import { AuthContextProps, useAuthContext } from '../context'
import { SafeAreaViewWrapper } from '.'
import { BORDERS, SIZES } from '../styles'

interface AuthComponentProps {
  onPressLeft: () => void
  btnTextLeft: string
  onPressRight: () => void
  btnTextRight: string
  header: string
}

export const AuthComponent = ({
  onPressLeft,
  btnTextLeft,
  onPressRight,
  btnTextRight,
  header,
}: AuthComponentProps) => {
  const { username, password, setUsername, setPassword } =
    useAuthContext() as AuthContextProps
  const { status } = useMessageRenderer()

  return (
    <SafeAreaViewWrapper header={header}>
      <TextInput
        // @ts-ignore
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        // @ts-ignore
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          // @ts-ignore
          style={styles.button}
          onPress={onPressLeft}>
          <Text style={styles.buttonText}>{btnTextLeft}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // @ts-ignore
          style={styles.button}
          onPress={onPressRight}>
          <Text style={styles.buttonText}>{btnTextRight}</Text>
        </TouchableOpacity>
      </View>
      {status ? <Text>{status}</Text> : null}
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    gap: SIZES.small,
  },
  input: {
    width: 300,
    height: 40,
    ...BORDERS.standard,
    marginBottom: SIZES.small,
    padding: SIZES.small,
  },
  button: {
    ...BORDERS.standard,
    padding: SIZES.small,
    marginBottom: SIZES.small,
    width: 145,
  },
  buttonText: {
    textAlign: 'center',
  },
})

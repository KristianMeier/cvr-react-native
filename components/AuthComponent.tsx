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
import { BORDERS, COLORS, SIZES } from '../styles'

interface AuthComponentProps {
  onPressLeft: () => void
  btnTextLeft: string
  onPressRight: () => void
  btnTextRight: string
}

export const AuthComponent = ({
  onPressLeft,
  btnTextLeft,
  onPressRight,
  btnTextRight,
}: AuthComponentProps) => {
  const { username, password, setUsername, setPassword } =
    useAuthContext() as AuthContextProps
  const { status } = useMessageRenderer()

  return (
    <SafeAreaViewWrapper>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressLeft}>
            <Text style={styles.buttonText}>{btnTextLeft}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressRight}>
            <Text style={styles.buttonText}>{btnTextRight}</Text>
          </TouchableOpacity>
        </View>
        {status ? <Text>{status}</Text> : null}
      </View>
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: SIZES.small,
  },
  input: {
    width: 300,
    height: 40,
    border: BORDERS.standard,
    marginBottom: SIZES.small,
    padding: SIZES.small,
  },
  button: {
    border: BORDERS.standard,
    padding: SIZES.small,
    marginBottom: SIZES.small,
    width: 145,
  },
  buttonText: {
    textAlign: 'center',
  },
})
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { AuthContextProps, useAuthContext } from '../context'
import { COLORS, SIZES } from '../styles'
import { SafeAreaViewWrapper } from './SafeAreaViewWrapper'

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

  return (
    <SafeAreaViewWrapper header={header}>
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
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    gap: SIZES.small,
    width: '100%',
  },
  input: {
    height: 40,
    marginBottom: SIZES.small,
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderStyle: 'solid',
    width: '100%',
  },
  button: {
    padding: SIZES.small,
    marginBottom: SIZES.small,
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderStyle: 'solid',
  },
  buttonText: {
    textAlign: 'center',
  },
})

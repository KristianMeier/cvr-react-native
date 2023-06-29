import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useRouter } from 'expo-router'
import { useMessageRenderer } from '../hooks'
import { MYACCOUNT_PATH } from '../constants'
import { SafeAreaViewWrapper } from '../components'
import { useAuthContext, AuthContextProps } from '../context'

const Register = () => {
  const { username, password, setUsername, setPassword, registerUser } =
    useAuthContext() as AuthContextProps

  const { status } = useMessageRenderer()
  const router = useRouter()

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
            onPress={registerUser}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(MYACCOUNT_PATH)}>
            <Text style={styles.buttonText}>Login Screen</Text>
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
    gap: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: 145,
  },
  buttonText: {
    textAlign: 'center',
  },
})

export default Register

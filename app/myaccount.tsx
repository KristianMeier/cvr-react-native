import { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import GatedContent from './'
import { useRouter } from 'expo-router'
import { useMessageRenderer } from '../hooks'
import { AuthContextProps, useAuthContext } from '../context'
import { REGISTER_PATH } from '../constants'
import { SafeAreaViewWrapper } from '../components'

const MyAccount = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    createTable,
    isLoggedIn,
    loginUser,
  } = useAuthContext() as AuthContextProps
  const { status } = useMessageRenderer()
  const router = useRouter()

  useEffect(() => {
    createTable()
  }, [])

  if (isLoggedIn) return <GatedContent />

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
            onPress={loginUser}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(REGISTER_PATH)}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        {status ? <Text>{status}</Text> : null}
      </View>
    </SafeAreaViewWrapper>
  )
}

export default MyAccount

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

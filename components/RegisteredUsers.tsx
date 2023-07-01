import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { COLORS, SIZES } from '../styles'
import { useAuthContext, AuthContextProps } from '../context'

export const UserList = () => {
  const { users, readUsers, clearUsers } = useAuthContext() as AuthContextProps

  useEffect(() => {
    readUsers()
  }, [])

  return (
    <>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <View style={styles.userItem}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.password}>{item.password}</Text>
            </View>
          )
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      {users && (
        <View>
          <Text>Here are some registerede users</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={clearUsers}>
            <Text style={styles.buttonText}>Clear Users</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    fontSize: 18,
    color: 'gray',
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

import { useState, useContext, createContext } from 'react'
import * as SQLite from 'expo-sqlite'
import { useRouter } from 'expo-router'
import { GATED_CONTENT_PATH } from '../constants'

const db = SQLite.openDatabase('authentication.db')

interface AuthContextProviderProps {
  children: React.ReactNode
}

export interface AuthContextProps {
  isLoggedIn: boolean
  logOut: () => void
  logIn: () => void
  username: string
  password: string
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  createTable: () => void
  loginUser: () => void
  registerUser: () => void
  readUsers: () => void
  clearUsers: () => void
  users: any[] | undefined
  data: {
    username: string
    password: string
  }
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState()
  const router = useRouter()

  const logOut = () => {
    setIsLoggedIn(false)
  }

  const logIn = () => {
    setIsLoggedIn(true)
  }

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL);'
      )
    })
  }

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?;',
        [username, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            logIn()
            router.push(GATED_CONTENT_PATH)
            console.log(username, password)
          } else {
            console.log('Failed to login user.')
          }
        }
      )
    })
  }

  const registerUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?);',
        [username, password],
        (_, { insertId }) => {
          if (insertId) {
            console.log('User registered successfully.')
            readUsers()
            console.log(users)
          } else {
            console.log('Failed to register user.')
          }
        }
      )
    })
  }

  const readUsers = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM users;', [], (_, { rows }) => {
        // setUsers(rows._array)
        // console.log('srows', rows)
        console.log(rows._array)
        // console.log(users)
        return rows._array
      })
    })
  }

  const data = readUsers()

  const clearUsers = () => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM users;', [], () => {
        console.log('Users cleared successfully.')
      })
    })
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logOut,
        logIn,
        username,
        setUsername,
        password,
        setPassword,
        createTable,
        loginUser,
        registerUser,
        readUsers,
        clearUsers,
        users,
        data,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

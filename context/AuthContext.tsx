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
  clearAuthInfo: (path: string) => void
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const logOut = () => {
    setIsLoggedIn(false)
  }

  const logIn = () => {
    setIsLoggedIn(true)
    router.push(GATED_CONTENT_PATH)
  }

  const createTable = () => {
    db.transaction((tx) =>
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL);'
      )
    )
  }

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?;',
        [username, password],
        (_, { rows }) => {
          const userExists = rows.length > 0
          userExists ? logIn() : console.log('Invalid username or password.')
        }
      )
    })
  }

  const clearAuthInfo = (path: string) => {
    setUsername('')
    setPassword('')
    router.push(path)
  }

  const addUsertoDb = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?);',
        [username, password],
        (_, { insertId }) =>
          insertId
            ? console.log('User registered successfully.')
            : console.log('Failed to register user.')
      )
    })
  }

  const registerUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ?;',
        [username],
        (_, { rows }) => {
          const userExists = rows.length > 0
          userExists ? console.log('Username already exists.') : addUsertoDb()
        }
      )
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
        clearAuthInfo,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

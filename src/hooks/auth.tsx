import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { api } from '../services/api'

interface User {
  id: number
  name: string
  email: string
  // Add other user properties as needed
}

interface AuthContextData {
  user: User | null
  token: string | null
  signIn: (credentials: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const signIn = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    try {
      const response = await api.post('/signin', {
        email: email,
        password: password
      })
      const { user, accessToken } = response.data

      localStorage.setItem('@ccsystem:user', JSON.stringify(user))
      localStorage.setItem('@ccsystem:token', accessToken)

      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      setData({
        user,
        token,
        signIn,
        signOut
      })
    } catch (error: any) {
      if (error.response) {
        alert(error)
      } else {
        alert('Not possible to login')
      }
    }
  }

  const signOut = () => {
    localStorage.removeItem('@ccsystem:token')
    localStorage.removeItem('@ccsystem:user')
    setData({
      user: null,
      token: null,
      signIn,
      signOut
    })
  }

  const [data, setData] = useState<AuthContextData>({
    user: null,
    token: null,
    signIn,
    signOut
  })

  const token = localStorage.getItem('@ccsystem:token')
  const user = localStorage.getItem('@ccsystem:user')

  useEffect(() => {
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const parsedUser: User = JSON.parse(user)
      setData({
        user: parsedUser,
        token,
        signIn,
        signOut
      })
    }
  }, [token, user])

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

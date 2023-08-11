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
  isAdmin: boolean
  signIn: (credentials: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthContextData>({
    user: null,
    token: null,
    isAdmin: false,
    signIn: async ({ email, password }) => {
      try {
        const response = await api.post('/sessions', { email, password })
        const { user, token } = response.data

        localStorage.setItem('@ccsystem:user', JSON.stringify(user))
        localStorage.setItem('@ccsystem:token', token)

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({ user, token, isAdmin: user.is_Admin === 1 })
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Not possible to login')
        }
      }
    },
    signOut: () => {
      localStorage.removeItem('@ccsystem:token')
      localStorage.removeItem('@ccsystem:user')
      setData({ user: null, token: null, isAdmin: false })
    }
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
        isAdmin: parsedUser.is_Admin === 1
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

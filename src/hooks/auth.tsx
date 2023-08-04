import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({
    user: null,
    token: null,
    isAdmin: false // Default value
  });

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email: email, password: password })
      const { user, token } = response.data

      localStorage.setItem("@rocketfood:user", JSON.stringify(user))
      localStorage.setItem("@rocketfood:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Not possible to login")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketfood:token")
    localStorage.removeItem("@rocketfood:user")

    setData({})
  }

  const token = localStorage.getItem('@rocketfood:token')
  const user = localStorage.getItem('@rocketfood:user')

  useEffect(() => {

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const parsedUser = JSON.parse(user);
      const userInBoolean = parsedUser.is_Admin === 0 ? false : true;
      setData({
        token,
        user: parsedUser,
        isAdmin: userInBoolean
      })
    }
  }, [token, user])

  return <AuthContext.Provider value={{ signIn, signOut, user: data.user, isAdmin: data.isAdmin }}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

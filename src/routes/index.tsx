import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'

export const Routes = () => {
  const { user } = useAuth()
  return <BrowserRouter>{user ? <AuthRoutes /> : <AppRoutes />}</BrowserRouter>
}

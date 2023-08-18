import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes = () => {
  const test = true
  return <BrowserRouter>{test ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}

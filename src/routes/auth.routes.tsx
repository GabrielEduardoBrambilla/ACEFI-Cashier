import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export function AuthRoutes() {
  console.log('Auth Routes')

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

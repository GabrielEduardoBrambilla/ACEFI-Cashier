import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { itemRegister } from '../pages/ItemRegister'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<itemRegister />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}
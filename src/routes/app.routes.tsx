import { Routes, Route } from 'react-router-dom'

import { ItemRegister } from '../pages/ItemRegister'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ItemRegister />} />
    </Routes>
  )
}

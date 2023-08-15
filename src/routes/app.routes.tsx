import { Routes, Route } from 'react-router-dom'

import { ItemRegister } from '../pages/ItemRegister'
import { SalesPage } from '../pages/SalesPage'

export function AppRoutes() {
  console.log('AppRoutes')
  return (
    <Routes>
      <Route path="/" element={<ItemRegister />} />
      <Route path="/loja" element={<SalesPage />} />
    </Routes>
  )
}

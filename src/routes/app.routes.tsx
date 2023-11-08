import { Routes, Route } from 'react-router-dom'

import { ItemRegister } from '../pages/ItemRegister'
import { SalesPage } from '../pages/SalesPage'
import { ItemEditor } from '../pages/ItemEdit'

export function AppRoutes() {
  console.log('In AppRoutes')
  return (
    <Routes>
      <Route path="/" element={<ItemRegister />} />
      <Route path="/loja" element={<SalesPage />} />
      <Route path="/edititem/:id" element={<ItemEditor />} />
    </Routes>
  )
}

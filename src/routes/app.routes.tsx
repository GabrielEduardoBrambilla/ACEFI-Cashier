import { Routes, Route } from 'react-router-dom'

import { ItemRegister } from '../pages/ItemRegister'
import { SalesPage } from '../pages/SalesPage'
import { OverView } from '../pages/OverView'

export function AppRoutes() {
  console.log('In AppRoutes')
  return (
    <Routes>
      <Route path="/" element={<ItemRegister />} />
      <Route path="/loja" element={<SalesPage />} />
      <Route path="/relatorio" element={<OverView />} />
    </Routes>
  )
}

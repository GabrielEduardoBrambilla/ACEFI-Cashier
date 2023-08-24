import { FC } from 'react'
import { Container } from './styles'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { Link } from 'react-router-dom'
interface NavbarProps {
  store?: boolean
}

export const Navbar: FC<NavbarProps> = ({ store }: NavbarProps) => {
  return (
    <Container>
      <RiFileExcel2Fill title="Exportar relatório Excel" />
      {!store && (
        <Link to="/loja" title="Ir para loja" className="store-btn">
          <p>Ir para loja</p>
          <FaStore />
        </Link>
      )}
      {store && (
        <Link to="/" title="Ir para home" className="store-btn">
          <ImHome3 />
        </Link>
      )}
      <FaUserCircle title="Logout" />
    </Container>
  )
}

import { FC } from 'react'
import { Container } from './styles'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { Link } from 'react-router-dom'
interface NavbarProps {
  store?: boolean
}

export const Navbar: FC<NavbarProps> = ({ store }: NavbarProps) => {
  return (
    <Container>
      <BsFiletypeXlsx />
      {!store && (
        <Link to="/loja" className="store-btn">
          <p>Ir para loja</p>
          <FaStore />
        </Link>
      )}
      {store && (
        <Link to="/" className="store-btn">
          <ImHome3 />
        </Link>
      )}

      <FaUserCircle />
    </Container>
  )
}

import { FC } from 'react'
import { Container } from './styles'
import coca from '../../assets/react.svg'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { FaStore, FaUserCircle } from 'react-icons/fa'
interface NavbarProps {
  image?: string
}

export const Navbar: FC<NavbarProps> = ({ image }: NavbarProps) => {
  return (
    <Container>
      <BsFiletypeXlsx />

      <div className="store-btn">
        <p>Ir para loja</p>
        <FaStore />
      </div>
      <FaUserCircle />
    </Container>
  )
}

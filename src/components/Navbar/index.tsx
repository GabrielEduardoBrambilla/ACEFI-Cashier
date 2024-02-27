import { FC } from 'react'
import { Container } from './styles'
import { FaStore } from 'react-icons/fa'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { ImHome3 } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth.js'
import { DiDatabase } from 'react-icons/di'

interface NavbarProps {
  store?: boolean
}

export const Navbar: FC<NavbarProps> = ({ store }: NavbarProps) => {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <div
        onClick={() => {
          navigate('/relatorio')
        }}
      >
        <DiDatabase title="Exportar relatório Excel" />
      </div>
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
      <div className="log-out" onClick={handleSignOut}>
        <RiLogoutCircleRLine title="Logout" />
      </div>
    </Container>
  )
}

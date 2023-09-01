import { FC } from 'react'
import { Container } from './styles'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { FaStore } from 'react-icons/fa'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { ImHome3 } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth.js'

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
  const fetchXLSX = async () => {
    try {
      toast.info('Iniciando download, aguarde um momento', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      const response = await api.get('/getXLSX', { responseType: 'blob' })

      // Create a Blob from the response data
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      // Create a blob URL for the Blob
      const url = URL.createObjectURL(blob)

      // Create a temporary link element to initiate download
      const link = document.createElement('a')
      link.href = url
      link.download = 'relatorio_vendas.xlsx' // Set the desired filename
      // Trigger a click on the link to start the download
      link.click()

      // Clean up the temporary link
      link.remove()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <div onClick={fetchXLSX}>
        <RiFileExcel2Fill title="Exportar relatório Excel" />
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

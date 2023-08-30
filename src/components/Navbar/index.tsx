import { FC } from 'react'
import { Container } from './styles'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

interface NavbarProps {
  store?: boolean
}

export const Navbar: FC<NavbarProps> = ({ store }: NavbarProps) => {
  const fetchXLSX = async () => {
    try {
      const response = await fetch('/getXLSX') // Send a request to the /getXLSX endpoint
      const blob = await response.blob() // Get the response as a Blob (file-like object)

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob)

      // Create a temporary link element to initiate download
      const link = document.createElement('a')
      link.href = url
      link.download = 'relatorio_compras.xlsx' // Set the desired filename

      // Trigger a click on the link to start the download
      link.click()

      // Clean up the temporary URL and link
      window.URL.revokeObjectURL(url)
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
      <FaUserCircle title="Logout" />
    </Container>
  )
}

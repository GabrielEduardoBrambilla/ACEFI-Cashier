import { FC } from 'react'
import { Container } from './styles.js'
// import { api } from '../../services/api.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { Card } from '../../components/Card/index.js'

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  // function handleItemRegister(data: FormData) {
  //   const nome = data.get('nome') as string
  //   const preco = data.get('preco') as string
  //   const file = data.get('selectedFile') as File

  //   api
  //     .post('/signup', {
  //       nome: nome,
  //       preco: preco,
  //       image: file
  //     })
  //     .then(function (response) {
  //       console.log('SUCESSFUL RESPONSE')
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     })
  // }

  return (
    <Container>
      <div className="items-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="right-section">
        <nav>
          <BsFiletypeXlsx />

          <div className="store-btn">
            <p>Ir para loja</p>
            <FaStore />
          </div>
          <FaUserCircle />
        </nav>
        <div className="table-container">
          <div className="table-header">Nome</div>
          <div className="table-header">Quant</div>
          <div className="table-header">Preco</div>
          <div className="table-row">
            <div className="table-item">Coca</div>
            <div className="table-item">1</div>
            <div className="table-item">5</div>
          </div>
          <div className="table-row">
            <div className="table-item">Coca</div>
            <div className="table-item">1</div>
            <div className="table-item">5</div>
          </div>
          <div className="table-row">
            <div className="table-item">Coca</div>
            <div className="table-item">1</div>
            <div className="table-item">5</div>
          </div>
          <div className="table-row">
            <div className="table-item">Coca</div>
            <div className="table-item">1</div>
            <div className="table-item">5</div>
          </div>{' '}
          <div className="table-row">
            <div className="table-item">Coca</div>
            <div className="table-item">1</div>
            <div className="table-item">5</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

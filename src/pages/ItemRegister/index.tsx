import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { Card } from '../../components/Card/index.js'

interface ItemRegisterProps {}

export const ItemRegister: FC<ItemRegisterProps> = () => {
  function handleSignIn() {
    api.post('/api/sign', {
      data: {}
    })
  }

  return (
    <Container>
      <div className="items-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
        <div className="form-wrapper">
          <Form
            onSubmit={handleSignIn}
            newProduct
            formTitle="Registrar um novo Item"
            ActionButton="Registrar item"
          />
        </div>
      </div>
    </Container>
  )
}

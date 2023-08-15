import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { Card } from '../../components/Card/index.js'

interface ItemRegisterProps {}

export const ItemRegister: FC<ItemRegisterProps> = () => {
  function handleItemRegister(data: any) {
    const { email, nome, password } = data

    api
      .post('/signup', {
        nome: nome,
        email: email,
        senha: password
      })
      .then(function (response) {
        console.log('SUCESSFUL RESPONSE')
        console.log(response)
      })
      .catch(function (error) {
        console.error(error)
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
            onSubmit={handleItemRegister}
            newProduct
            input1Title="Nome"
            input2Title="Preço"
            formTitle="Registrar um novo Item"
            ActionButton="Registrar item"
          />
        </div>
      </div>
    </Container>
  )
}

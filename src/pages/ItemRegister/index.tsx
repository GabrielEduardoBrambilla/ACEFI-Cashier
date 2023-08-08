import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'

interface ItemRegisterProps {}

export const ItemRegister: FC<ItemRegisterProps> = () => {
  function handleSignIn() {
    api.post('/api/sign', {
      data: {}
    })
  }

  return (
    <Container>
      <div className="items-wrapper"></div>
      <div className="right-section">
        <nav>
          {/* XLS */}
          <BsFiletypeXlsx />

          <div className="store-btn">
            <p>Ir para loja</p>
            {/* Store icons */}
            <FaStore />
          </div>
          <FaUserCircle />
        </nav>
        <div className="form-wrapper">
          <Form onSubmit={handleSignIn} singIn ActionButton="Login" />
        </div>
      </div>
    </Container>
  )
}

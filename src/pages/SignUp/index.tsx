import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import CapivaraOnLake from '../../assets/Cartoon.png'
import { Container } from './styles.js'
import { api } from '../../services/api.js'

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => {
  function handleSignUp(data: FormData) {
    const nome = data.get('nome') as string
    const email = data.get('email') as string
    const password = data.get('senha') as string
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
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div className="logo-section">
        <p> CCS</p>
        <img src={CapivaraOnLake} alt="" />
      </div>
      <div className="form-section">
        <Form onSubmit={handleSignUp} signUp ActionButton="Registrar-se" />
      </div>
    </Container>
  )
}

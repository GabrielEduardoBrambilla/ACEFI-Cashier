import { Form } from '../../components/Form'
import { FC } from 'react'
import CapivaraOnLake from '../../assets/Cartoon.png'
import { Container } from './styles'
import { api } from '../../services/api.js'

interface SignInProps {}

export const SignIn: FC<SignInProps> = () => {
  function handleSignIn(data: any) {
    const { email, password } = data

    api
      .post('/signin', {
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
        <Form
          waringMsn="Registrado com sucesso"
          onSubmit={handleSignIn}
          signIn
          ActionButton="Login"
        />
      </div>
    </Container>
  )
}

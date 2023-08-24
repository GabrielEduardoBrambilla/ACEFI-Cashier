import { Form } from '../../components/Form'
import { FC } from 'react'
import CapivaraOnLake from '../../assets/Cartoon.png'
import { Container } from './styles'
import { api } from '../../services/api.js'
import { useAuth } from '../../hooks/auth.js'

interface SignInProps {}

export const SignIn: FC<SignInProps> = () => {
  const { signIn } = useAuth()
  function handleSignIn(data: FormData) {
    const email = data.get('email') as string
    const password = data.get('senha') as string
    signIn({ email, password })
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

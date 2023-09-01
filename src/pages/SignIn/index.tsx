import { Form } from '../../components/Form'
import { FC } from 'react'
import logo from '../../assets/HOPIC_SHARP.png'
import { Container } from './styles'
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
        <img src={logo} alt="" />
        <div className="logo-text">
          <p> S</p>
          <p> T</p>
          <p> O</p>
          <p> R</p>
          <p> E</p>
        </div>
      </div>
      <div className="form-section">
        <Form
          // waringMsn="Registrado com sucesso"
          formTitle="Entre na plataforma! "
          onSubmit={handleSignIn}
          signIn
          ActionButton="Login"
        />
      </div>
    </Container>
  )
}

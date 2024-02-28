import { Form } from '../../components/Form'
import { FC } from 'react'
import logo from '../../assets/Logo.png'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth.js'
import { toast } from 'react-toastify'

interface SignInProps {}

export const SignIn: FC<SignInProps> = () => {
  const { signIn } = useAuth()
  function handleSignIn(data: FormData) {
    const email = data.get('email') as string
    const password = data.get('password') as string
    if (!email || !password) {
      toast.error('Preencha todos os campos', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return
    }
    try {
      signIn({ email, password })
    } catch (error) {
      toast.warn('Senha ou e-mail incorreto', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }
  }

  return (
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div className="logo-section">
        <img src={logo} alt="" />
        <div className="text-wrapper">
          <div className="logo-text">
            <p> C</p>
            <p> A</p>
            <p> I</p>
            <p> X</p>
            <p> A</p>
          </div>
          <div className="logo-text">
            <p> B</p>
            <p> E</p>
            <p> B</p>
            <p> I</p>
            <p> D</p>
            <p> A</p>
            <p> S</p>
          </div>
        </div>
      </div>
      <div className="form-section">
        <Form
          formTitle="Entre na plataforma! "
          onSubmit={handleSignIn}
          signIn
          ActionButton="Login"
        />
      </div>
    </Container>
  )
}

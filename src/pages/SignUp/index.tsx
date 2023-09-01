import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import logo from '../../assets/HOPIC_SHARP.png'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => {
  const navigate = useNavigate()

  function handleSignUp(data: FormData) {
    const name = data.get('name') as string
    const email = data.get('email') as string
    const password = data.get('password') as string

    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }
    api
      .post('/signup', {
        name: name,
        email: email,
        password: password
      })
      .then(() => {
        toast.success('Conta registrada com sucesso', {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
        navigate('/')
      })
      .catch(function (error) {
        console.log(error)
        toast.error(`Ocorreu um erro: ${error.request.response}`, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
        console.error(error)
      })
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
          formTitle="Registre-se na plataforma! "
          onSubmit={handleSignUp}
          signUp
          ActionButton="Registrar-se"
        />
      </div>
    </Container>
  )
}
